import * as cdk from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as rds from "aws-cdk-lib/aws-rds";
import { Construct } from "constructs";
/*
    API Reference: https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_rds-readme.html
*/
interface ExtendedProps extends cdk.StackProps {
    vpcId: string | undefined;
    vpcCidr: string | undefined;
}

export class RDS extends cdk.Stack {
    constructor(scope: Construct, id: string, props: ExtendedProps) {
        super(scope, id, props);

        /* env */
        const env: string = scope.node.tryGetContext("env") || "dev";

        /* VPC */
        const vpc = ec2.Vpc.fromLookup(this, "VpcInRds", {
            vpcId: props.vpcId,
        });

        /* Security Group */
        const rdsSecurityGroup = new ec2.SecurityGroup(
            this,
            "ItemRentalApplicationRDSSecurityGroup",
            {
                vpc: vpc,
                allowAllOutbound: true,
                securityGroupName: "ItemRentalApplicationRDSSecurityGroup",
            }
        );

        // Add inbound rules to allow incoming traffic
        rdsSecurityGroup.addIngressRule(
            ec2.Peer.ipv4(`${props.vpcCidr}`),
            ec2.Port.tcp(5432)
        );

        /* Parameter Group */
        const parameterGroup = new rds.ParameterGroup(
            this,
            "ItemRentalApplicationParameterGroup",
            {
                engine: rds.DatabaseInstanceEngine.postgres({
                    version: rds.PostgresEngineVersion.VER_16_4,
                }),
                parameters: {
                    "rds.force_ssl": "0", // set ssl false because rds can be accressed inside VPC
                },
            }
        );

        const secretName = process.env.SECRET_NAME || "default-secret";

        /* RDS Instance */
        const instance = new rds.DatabaseInstance(this, "ItemRentalApplicationRdsInstance", {
            // spec
            instanceIdentifier: "itemrentalapplicationrds",
            engine: rds.DatabaseInstanceEngine.postgres({
                version: rds.PostgresEngineVersion.VER_16_4,
            }),
            instanceType: ec2.InstanceType.of(
                ec2.InstanceClass.T3,
                ec2.InstanceSize.MICRO
            ),
            // dbName
            databaseName: "itemrentalapplicationdb", // "-" is not allowed
            // db key
            credentials: rds.Credentials.fromGeneratedSecret("itemrentalapplication", {
                secretName,
            }),
            // vpc
            vpc,
            // subnet group
            vpcSubnets: {
                subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
            },
            // security group
            securityGroups: [rdsSecurityGroup],
            // parameter groups
            parameterGroup,
            // public dns resolve
            publiclyAccessible: true,
            // storage
            allocatedStorage: 5,
            maxAllocatedStorage: 20,
            // removal policy (not delete in production)
            removalPolicy: cdk.RemovalPolicy.DESTROY,
        });
    }
}
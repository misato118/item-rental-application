import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { EmployeesModule } from './employees/employees.module';
import { CompaniesModule } from './companies/companies.module';
import { ItemsModule } from './items/items.module';
import { ReviewsModule } from './reviews/reviews.module';
import { RentersModule } from './renters/renters.module';
import { RenterApplicationsModule } from './renterApplications/renterApplications.module';
import { ItemCategoriesModule } from './itemCategories/itemCategories.module';
import { StockStatusesModule } from './stockStatuses/stockStatuses.module';
import { OwnerApplicationsModule } from './ownerApplications/ownerApplications.module';
import { ConversationsModule } from './conversations/conversations.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            sortSchema: true,
        }),
        EmployeesModule,
        CompaniesModule,
        ItemsModule,
        ReviewsModule,
        RentersModule,
        RenterApplicationsModule,
        ItemCategoriesModule,
        StockStatusesModule,
        OwnerApplicationsModule,
        ConversationsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
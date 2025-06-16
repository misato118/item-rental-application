import { registerEnumType } from '@nestjs/graphql';

export enum ApplicationStatus {
    DRAFT = 'DRAFT',
    PENDING = 'PENDING',
    DECLINED = 'DECLINED',
    PUBLISHED = 'PUBLISHED',
}

registerEnumType(ApplicationStatus, {
    name: 'ApplicationStatus',
    description: 'Owner application status for an item',
    valuesMap: {
        DRAFT: {
            description: 'When an owner created an item but has not applied yet.',
        },
        PENDING: {
            description: 'When an owner applied to publish an item.',
        },
        DECLINED: {
            description: 'When an owner application is declined.',
        },
        PUBLISHED: {
            description: 'When an owner application is accepted and published',
        },
    },
});
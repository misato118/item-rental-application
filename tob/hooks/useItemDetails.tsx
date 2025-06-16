import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { GetItemInfoDocument } from '@/features/utils/graphql/typeDefs/graphql';

const useItemDetails = () => {
    const router = useRouter();
    const itemId: number = router.query?.item ? Number(router.query?.item) : 0;

    const { loading, error, data } = useQuery(GetItemInfoDocument, {
        variables: { itemId: itemId }
    });
    const [activeTab, setActiveTab] = useState("reviews");

    return {
        loading,
        error,
        data,
        activeTab,
        setActiveTab,
        router
    }
}

export default useItemDetails;
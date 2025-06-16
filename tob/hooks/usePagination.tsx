import { useRouter } from "next/router";

const usePagination = <T,>(data: T[]) => {
    const router = useRouter();

    const DATA_COUNT_PER_PAGE = 10;
    const currentPage = Number(router.query.page) || 1;
    const totalPages = Math.ceil((data || []).length / DATA_COUNT_PER_PAGE);

    // Slice items for current page
    const startIndex = (currentPage - 1) * DATA_COUNT_PER_PAGE;
    const paginatedItems = (data || []).slice(
        startIndex,
        startIndex + DATA_COUNT_PER_PAGE
    );    
    
    return {
        router,
        currentPage,
        totalPages,
        paginatedItems
    }
}

export default usePagination;
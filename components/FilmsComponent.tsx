import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { fetchAPI } from "../lib/api";
import { useFetchUser } from "../lib/authContext";
import FilmsList from "./FilmsList";
import Layout from "./Layout";

interface props {}
export default function FilmsComponent({ error, films, queryParam }: any) {
    const router = useRouter();
    const { user, loading } = useFetchUser();
    const [currentItems, setCurrentItems] = useState(films);
    const [loadingData, setLoadingData] = useState(false);
    const [currentPage, setcurrentPage] = useState(queryParam);

    useEffect(() => {
        const currentPath = router.pathname;
        const currentQuery = router.query;
        currentQuery.page = currentPage;

        router.push({
            pathname: currentPath,
            query: currentQuery,
        });

        const fetchData = async () => {
            setLoadingData(true);
            const { data, error } = await fetchAPI(
                `films?pagination[pageSize]=2&pagination[page]=${currentPage}`
            );
            setCurrentItems(data.data);
            setLoadingData(false);
        };
        fetchData();
        setCurrentItems(films);
    }, [queryParam, currentPage]);

    const handlePageClick = (event: any) => {
        console.log(event.selected + 1);

        setcurrentPage(event.selected + 1);
    };
    if (error) {
        return (
            <Layout user={user}>
                <h1 className="text-2xl md:text-3xl font-extrabold leading-tighter mb-4 text-center">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2">
                        {error}
                    </span>
                </h1>
            </Layout>
        );
    }
    return (
        <Layout user={user}>
            <h1 className="text-5xl md:text-6xl font-extrabold text-center leading-tighter mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2">
                    Films
                </span>
            </h1>
            {/*             {loadingData && <p>loading data</p>}
            {!loadingData && <FilmsList films={currentItems} />} */}
            <FilmsList films={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={4}
                previousLabel="<"
                containerClassName="w-full flex justify-center"
                pageClassName="px-1"
                previousClassName="px-1"
                nextClassName="px-1"
                activeClassName="pagination__num--active"
                disabledClassName="pagination__num--disabled"
            />
        </Layout>
    );
}

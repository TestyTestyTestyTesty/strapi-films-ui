import React from "react";
import { GetServerSideProps } from "next";
import FilmsComponent from "../components/FilmsComponent";

import { fetchAPI } from "../lib/api";

export default function FilmsPage({ films, error, queryParam }: any) {
    return (
        <FilmsComponent error={error} films={films} queryParam={queryParam} />
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const queryParam = ctx.query.page || 1;
    const { data, error } = await fetchAPI(
        `films?pagination[pageSize]=2&pagination[page]=${queryParam}`
    );
    return {
        props: {
            films: data.data,
            error: error,
            queryParam: Number(queryParam),
        },
    };
};

import React from "react";
import Films from "../components/Films";

import { fetchAPI } from "../lib/api";

export default function films({ films, error }: any) {
    return <Films error={error} films={films} />;
}

export async function getStaticProps() {
    const { data, error } = await fetchAPI("films");

    return {
        props: {
            error: error,
            films: data,
        },
    };
}

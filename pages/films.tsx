import React from "react";
import Films from "../components/Films";
import Layout from "../components/Layout";
import { fetchAPI } from "../lib/api";
import { useFetchUser } from "../lib/authContext";

export default function films({ films, error }: any) {
    const { user, loading } = useFetchUser();
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
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2">
                    Films
                </span>
            </h1>
            <Films films={films} />
        </Layout>
    );
}

export async function getStaticProps() {
    const { data, error } = await fetchAPI("/films");

    return {
        props: {
            error: error,
            films: data,
        },
    };
}

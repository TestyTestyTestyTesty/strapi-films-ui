import React from "react";
import { useFetchUser } from "../lib/authContext";
import FilmsList from "./FilmsList";
import Layout from "./Layout";

export default function Films({ films, error }: any) {
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
            <FilmsList films={films} />
        </Layout>
    );
}

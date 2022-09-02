import React from "react";
import Layout from "../../components/Layout";
import { fetchAPI } from "../../lib/api";

export default function Film({ film }: any) {
    return (
        <div>
            <Layout>
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 py-2">
                        {film.attributes.title}
                    </span>
                </h1>
            </Layout>
        </div>
    );
}

export async function getServerSideProps({ params }: any) {
    const { slug } = params;
    const film = await fetchAPI(`/films?filters[slug][$eq]=${slug}`);
    return {
        props: {
            film: film.data[0],
        },
    };
}

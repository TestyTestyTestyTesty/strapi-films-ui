import Layout from "../components/Layout";
import { useFetchUser } from "../lib/authContext";

export default function Home() {
    const { user, loading } = useFetchUser();
    console.log(
        `environment: ${
            process.env.NEXT_PUBLIC_STRAPI_URL?.includes("localhost")
                ? "development"
                : "other"
        }`
    );

    return (
        <Layout user={user}>
            <h1 className="font-bold text-5xl">Movie strapi app</h1>
        </Layout>
    );
}

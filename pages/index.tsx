import { useSession } from "next-auth/react";
import Layout from "../components/Layout";

export default function Home() {
    const { data: session } = useSession();
    console.log(
        `environment: ${
            process.env.NEXT_PUBLIC_STRAPI_URL?.includes("localhost")
                ? "development"
                : "other"
        }`
    );

    return (
        <Layout>
            <h1 className="font-bold text-5xl">Movie strapi app</h1>
        </Layout>
    );
}

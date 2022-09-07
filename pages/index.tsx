import { signIn, signOut, useSession } from "next-auth/react";
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
            {session && (
                <a
                    className="md:p-2 py-2 block hover:text-purple-400"
                    onClick={() => signOut()}
                    style={{ cursor: "pointer" }}
                >
                    Logout ({session.user?.email})
                </a>
            )}
            {!session && (
                <>
                    <a
                        className="md:p-2 block py-2 hover:text-purple-400 text-black"
                        onClick={() => signIn("google")}
                        style={{ cursor: "pointer" }}
                    >
                        Login
                    </a>
                </>
            )}
        </Layout>
    );
}

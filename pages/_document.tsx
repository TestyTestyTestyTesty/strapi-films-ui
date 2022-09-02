import Document, { Html, Head, NextScript, Main } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en-US">
                <Head />
                <body className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

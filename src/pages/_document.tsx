import { FC } from "react";
import { Html, Head, Main, NextScript } from "next/document";

const Document: FC = () => {
    return (
        <Html>
            <Head>
                {/* Google Font - 'Noto Serif Traditional Chinese' + 'Noto Sans Display' + 'Carter One' */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display&family=Noto+Serif+TC&family=Carter+One&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;

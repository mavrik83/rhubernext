import React, { Html, Head, Main, NextScript } from 'next/document';
import { twc } from '../utils/classNames';

const classes = twc`
    min-h-screen
    bg-neutral-900
    text-neutral-200
    font-light
    `;

const Document = () => (
    <Html>
        <Head>
            <link rel='preconnect' href='https://fonts.googleapis.com' />
            <link rel='preconnect' href='https://fonts.gstatic.com' />
            <link
                href='https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed:wght@300;400;500&display=swap'
                rel='stylesheet'
            />
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <body className={classes}>
            <Main />
            <NextScript />
        </body>
    </Html>
);

export default Document;

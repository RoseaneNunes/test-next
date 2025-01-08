import Document, {Html,Head, Main, NextScript} from "next/document";

export default class MyDocument extends Document{
    render() {
        return(
            <Html>
                <Head>
                    <link rel=" icons" href="images.png" type="image/png" />
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"/>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Rajdhani:wght@600&display=swap" rel="stylesheet"/>

                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}

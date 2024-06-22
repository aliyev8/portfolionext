import { Inter } from "next/font/google";
import "../../globals.css";




const inter = Inter({ subsets: ["latin"] });

export const metadata = {

    title: 'My Packages',
    openGraph: {
        title: 'My Packages',
        description:'Hello friend',
        images: [
            {
                url: 'https://res.cloudinary.com/dawsyfhbt/image/upload/v1718979185/npm_oj8agm.svg',
                width: 800,
                height: 600,
                alt: 'img',
            }
        ]
    }
}


export default function layout({ children }) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="./favicon.png" type="image/png" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        </head>
        <body className={inter.className}>
        {children}
        </body>
        </html>
    );
}

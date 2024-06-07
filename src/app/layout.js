import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/header/Header";



const inter = Inter({ subsets: ["latin"] });

const seoImage = {

    "og_image": "/images/childrensgames.webp",
}
export const metadata = {

    title: 'Portfolio',
    openGraph: {
        title: 'Portfolio',
        description:'Hello friend',
        images: [
            {
                url: 'https://res.cloudinary.com/dawsyfhbt/image/upload/v1716474439/seo_sfjtb1.webp',
                width: 800,
                height: 600,
                alt: 'img',
            }
        ]
    }
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
        <link rel="icon" href="./favicon.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
    </head>
      <body className={inter.className}>
      <Header/>
      {children}
      </body>
    </html>
  );
}

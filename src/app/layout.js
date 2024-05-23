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
                url: 'https://allahyaraliyev.com/images/childrensgames_vkj2qc.webp',
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
      <body className={inter.className}>
      <Header/>
      {children}
      </body>
    </html>
  );
}

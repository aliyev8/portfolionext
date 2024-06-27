import { Inter } from "next/font/google";
import "../../globals.css";
import Header from "@/components/header/Header";



const inter = Inter({ subsets: ["latin"] });

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
  return children
}

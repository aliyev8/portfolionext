import { Inter } from "next/font/google";
import "../../globals.css";




const inter = Inter({ subsets: ["latin"] });

export const metadata = {

    title: 'My Packages',
    openGraph: {
        title: 'My Packages',
        description:'Hello World',
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


export default function layout({ children }) {
    return children
}

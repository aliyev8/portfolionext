import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";


const inter = Inter({ subsets: ["latin"] });

export const generateMetadata = ({params}) => {



    return {
        title: 'Portfolio',
        openGraph: {
            title: 'Portfolio',
            description:'Hello world',
            images: [
                {
                    url: '../../public/images/childrensgames.webp',
                    width: 800,
                    height: 600,
                    alt: 'Portfolio',
                }
            ]
        }
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

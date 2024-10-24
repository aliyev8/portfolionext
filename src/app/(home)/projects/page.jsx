import Projects from "@/components/projects/Projects";
import Header from "@/components/header/Header";

export const metadata = {

    title: 'Projects',
    openGraph: {
        title: 'Projects',
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
export default function projectPage(){
    return <div>
        <Header/>
        <Projects/>
    </div>
}
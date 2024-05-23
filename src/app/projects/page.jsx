import Projects from "@/components/projects/Projects";

export const metadata = {

    title: 'Projects',
    openGraph: {
        title: 'Projects',
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
export default function projectPage(){
    return <div>
        <Projects/>
    </div>
}
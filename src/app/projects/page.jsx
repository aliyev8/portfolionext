import Projects from "@/components/projects/Projects";

export const metadata = {

    title: 'Projects',
    openGraph: {
        title: 'Projects',
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
export default function projectPage(){
    return <div>
        <Projects/>
    </div>
}
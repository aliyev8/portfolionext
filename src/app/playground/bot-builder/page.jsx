import Flow from "@/components/playground/builder/Flow";
import '../../../globals.css'

export const metadata = {

    title: 'Bot builder',
    openGraph: {
        title: 'Bot builder',
        description:'This is the demo of a Big project',
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

export default function BoBuilderPage() {

    return <div className='h-screen'>

        <Flow/>
    </div>
}
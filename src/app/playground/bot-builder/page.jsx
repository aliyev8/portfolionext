import Flow from "@/components/playground/builder/Flow";
import '../../../globals.css'

export const metadata = {

    title: 'Bot builder',
    openGraph: {
        title: 'Bot builder',
        description:'This is the demo of a Big project',
        images: [
            {
                url: 'https://allahyaraliyev.com/playground/bot-builder',
                width: 800,
                height: 400,
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
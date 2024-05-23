import {useEffect, useState} from "react";


function TitleSkeleton({content}) {
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const stopLoading = setTimeout(() => {
            setLoading(false);
        }, 700);

        return () => clearTimeout(stopLoading);
    }, [content]);

    return <h1 className={`font-bold font-avenirHeavy text-[68px] ${loading ? 'show-loading text-loader' : ''}`}>{content}</h1>

}

export default TitleSkeleton;

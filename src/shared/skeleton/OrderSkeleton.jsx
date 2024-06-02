'use client'

import {useEffect, useState} from "react";
import Link from "next/link";



function GeneralSkeleton({content,bg,link,project}) {
    const [loading, setLoading] = useState(true);



    useEffect(() => {
        setLoading(true)
        const stopLoading = setTimeout(() => {
            setLoading(false);
        }, 700);

        return () => clearTimeout(stopLoading);
    }, [project]);

    return <span
        className={`flex justify-center items-center gap-4 
        ${loading ? 'show-loading text-loader' : `${bg ? `p-2 rounded-2xl flex justify-center items-center bg-opacity-5`:''}`}`}>
        {content}
        {link &&
            <Link
                target="_blank"
                className={`transition ${loading ? 'opacity-0 scale-0' : " opacity-100 scale-100"}`} href={link}>
                <img src='/images/link.svg'/>
            </Link>
        }
    </span>

}

export default GeneralSkeleton;

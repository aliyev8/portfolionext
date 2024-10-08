'use client'


import {useEffect, useState} from "react";
import Link from "next/link";

function Header() {

    const [scrollHeader,setScrollHeader]= useState(true)
    const [lastScrollTop, setLastScrollTop] = useState(0);


    const handleScroll = () => {
        const currentScrollTop = window.scrollY;

        if (currentScrollTop > lastScrollTop) {
            currentScrollTop > 44 && setScrollHeader(false);
        } else {
            setScrollHeader(true);
        }
        setLastScrollTop(currentScrollTop);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollTop]);

    return <div className={`transition max-sm:fixed max-sm:top-0 max-sm:z-50 max-sm:w-full w-full bg-blueTheme-background
     py-4 h-[80px] fixed top-0 w-ful z-50 ${scrollHeader ? 'h-[80px] translate-y-0' : '-translate-y-20'}
     flex items-center
     `}>
        <div className='container-lg flex justify-between max-sm:px-4 items-center max-sm:m-0 w-full'>
           <Link className={`
            hover:underline cursor-pointer transition capitalize text-3xl  z-50 max-sm:text-2xl text-white`} href='/'>
               {`<Home/>`}</Link>

        </div>
    </div>
}

export default Header
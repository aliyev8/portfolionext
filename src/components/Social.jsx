import Link from "next/link";
import Image from "next/image";

export default function Social() {

    const social = [
        {
            name:'Letterboxd',
            logo:'/images/social/lb/lb.png',
            href:'https://letterboxd.com/allahyar/',

        },
        {
            name:'Spotify',
            logo:'/images/social/sp/sp.png',
            href:'https://open.spotify.com/user/31fwyew3ezl37fj7bc4iayntnptq?si=9c4ec657d0d74197',
            list:[]
        },
        {
            name:'Gmail',
            logo:'/images/social/gm.svg',
            href:'mailto:allahyaraliyev3@gmail.com',
            mail:[]
        },
        {
            name:'npm',
            logo:'/images/social/npm.svg',
            href:'https://www.npmjs.com/settings/aliyev_8/packages',
            simple:[]
        }
    ]
    return <div className='flex gap-4'>

        {
            social.map((sc,key) => (
              <div key={key} className='group flex items-center'>

                  <Link  href={sc.href} target='_blank' className='relative group-item'>

                      <Image src={sc.logo} alt={sc.name} width={100} height={100} className='w-[34px] opacity-60
                  transition hover:opacity-100 '/>
                  </Link>
              </div>
            ))
        }
    </div>
}
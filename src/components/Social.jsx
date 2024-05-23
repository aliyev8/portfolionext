import Link from "next/link";
import Image from "next/image";

export default function Social() {

    const social = [
        {
            name:'Letterboxd',
            logo:'/images/social/lb/lb.png',
            href:'https://letterboxd.com/allahyar/',
            fav:[
                {
                    name:"Blade Runner 2049",
                    cover:"/images/social/lb/f1.jpeg",
                    link:"https://letterboxd.com/film/blade-runner-2049/"
                },
                {
                    name:"2001: a space odyssey",
                    cover:"/images/social/lb/f2.jpeg",
                    link:"https://letterboxd.com/film/2001-a-space-odyssey/"
                },
                {
                    name:"Close-Up",
                    cover:"/images/social/lb/f3.jpeg",
                    link:"https://letterboxd.com/film/close-up/"
                },
                {
                    name:"Good Bye Lenin!",
                    cover:"/images/social/lb/f4.jpeg",
                    link:"https://letterboxd.com/film/good-bye-lenin/"
                }
            ]
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
        }
    ]
    return <div className='flex gap-4'>

        {
            social.map((sc,key) => (
              <div key={key} className='group'>

                  {
                      sc.fav && <div className='invisible grid grid-cols-4 gap-2 mb-8 opacity-0 absolute bottom-0 pb-8 left-[35%]
                      transition duration-300 group-hover:grid group-hover:opacity-100 group-hover:visible max-sm:left-0
                       '>

                                {
                                    sc.fav.map((f,i) => (
                                        <Link key={i} href={f.link} target='_blank'>
                                            <Image src={f.cover} alt={f.name} width={120} height={300}
                                                   className='rounded-md scale-0 group-hover:scale-100 transition duration-500'/>
                                        </Link>
                                    ))
                                }

                           </div>
                  }

                  {
                      sc.list && <div className='flex mb-8 invisible opacity-0  absolute bottom-0 pb-8 left-[35%]
                      transition duration-300 group-hover:opacity-100 group-hover:visible w-[30%] max-sm:left-0 max-sm:w-full
                       '>

                          <div style={{ overflow: 'hidden' }}
                               className='rounded-md scale-0 group-hover:scale-100 transition duration-500'
                          >
                              <iframe
                                  src="https://open.spotify.com/embed/artist/73mSg0dykFyhvU96tb5xQV?utm_source=generator"
                                  width="400"
                                  height="352"
                                  frameBorder="0"
                                  allowFullScreen=""
                                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                  loading="lazy"
                                  style={{ border: 'none' }}
                              ></iframe>
                          </div>
                      </div>
                  }

                  <Link  href={sc.href} target='_blank' className='relative group-item'>

                      <Image src={sc.logo} alt={sc.name} width={100} height={100} className='w-[40px] opacity-60
                  transition hover:opacity-100 '/>
                  </Link>
              </div>
            ))
        }
    </div>
}
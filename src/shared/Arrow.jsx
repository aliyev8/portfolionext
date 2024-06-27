

export default function Arrow({disable}) {
    return <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className='-rotate-90'
               xmlns="http://www.w3.org/2000/svg">
        <path d="M21.6665 28.6673L26.3332 24.0007L21.6665 19.334"
              stroke={disable ? '#babfca' : '#010034'} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">

    </path>
    </svg>
}
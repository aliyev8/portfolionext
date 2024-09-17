import {Providers} from "@/app/providers";


export default function mainLayout({children}) {
    return<html lang="en">
    <head>
        <link rel="icon" href="./favicon.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
    </head>
    <body>
    <Providers>
        {children}
    </Providers>
    </body>
    </html>
}
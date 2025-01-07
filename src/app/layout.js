import './globals.css'
import Script from 'next/script'

const GA_TRACKING_ID = 'G-Q0X9VMJ09F';

export const metadata = {
    title: 'Ekaterina Kushnir | Software Development',
    description: 'Wep development: portfolio web page.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                {/* Google Analytics Script */}
                <Script
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_TRACKING_ID}');
`}
                </Script>
            </head>
            <body>{children}</body>
        </html>
    )
}

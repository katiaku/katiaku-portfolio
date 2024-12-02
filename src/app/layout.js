import './globals.css'

export const metadata = {
    title: 'Ekaterina Kushnir | Software Development',
    description: 'Wep development: portfolio web page.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}

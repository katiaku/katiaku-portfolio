import './globals.css';

export const metadata = {
  title: 'Ekaterina Kushnir | Web Development',
  description: 'Wep development: portfolio web page.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

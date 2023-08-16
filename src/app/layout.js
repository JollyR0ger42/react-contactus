import './globals.css'
import { Poppins, Roboto } from 'next/font/google'
import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'

import { getLayoutData } from '@/dataMock'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
})

export const metadata = {
  title: 'Contact us',
  description: 'Mbunity test task',
}

async function getData() {
  const res = await getLayoutData()
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function RootLayout({ children }) {
  const data = await getData()

  return (
    <html lang="en">
      <body className={`${poppins.variable} ${roboto.variable}`}>
        <NavBar navElements={data.navbar}/>
        <main>
          {children}
        </main>
        <Footer {...data.footer} />
      </body>
    </html>
  )
}

import './globals.css'
import AboutActa from '../components/AboutActa'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className='justify-between'>
        <nav className="bg-[#F1B61B] w-full h-20 items-center justify-center">
          <div className='text-4xl text-white ml-2'>
            <span className='underline text-5xl text-white'>act</span>a
          </div>

          {/* <div className='justify-center items-center'>
            <AboutActa />
          </div> */}
          
        </nav>
        </div>
        {/* Navbar */}
        

        {children}

      </body>
    </html>
  )
}

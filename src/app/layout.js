import { AuthProvider } from '@/Providers/AuthProvider'
import './globals.css'
import { poppins } from '@/Utils/Font'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <AuthProvider> */}
        <body className={poppins.className}>
          <main className='min-h-[100vh]'>
            {children}
          </main>
        </body>
      {/* </AuthProvider> */}
    </html>
  )
}

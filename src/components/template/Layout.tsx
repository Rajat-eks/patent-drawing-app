import React from 'react'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

interface LayoutProps {
 children?: any
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
 return (
  <main>
   <Header />
   <div className='pt-[100px]'>{children}</div>
   <Footer />
  </main>
 )
}

export default Layout

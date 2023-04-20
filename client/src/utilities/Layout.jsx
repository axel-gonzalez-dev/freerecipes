// Import components
import Navbar from '../components/Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className='container mx-auto'>
        {children}
      </main>
      {/* <Footer /> */}
    </>
  )
}
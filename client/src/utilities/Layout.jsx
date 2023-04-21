// Import components
import Navbar from '../components/Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className='container mx-auto mt-20 mb-10'>
        {children}
      </main>
      {/* <Footer /> */}
    </>
  )
}
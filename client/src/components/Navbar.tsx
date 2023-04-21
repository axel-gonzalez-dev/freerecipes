// Import functionalities
import Link from 'next/link';

export default function Navbar() {

    const toggleNavbar = () => {

        try {

            const navbar = document.getElementById('navbar-default');

            if (navbar?.classList.contains('hidden')) {
                navbar?.classList.remove('hidden');
            } else {
                navbar?.classList.add('hidden');
            }

        } catch (error) {
            console.error(error);
        }

    };

    const navbarSections = [
        {
            name: 'Categories',
            path: '/categories'
        },
    ];

    return (
        <>
            <nav className='bg-seasalt | w-full | flex flex-wrap items-center justify-between px-10 py-4 | fixed z-20 top-0 left-0'>
                <Link href="/" className='self-center | text-2xl font-semibold hover:text-green-600'>Home</Link>

                <button className="sm:hidden " type="button" onClick={toggleNavbar}>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>

                <div className="hidden | w-full sm:w-auto sm:block | mt-5 sm:mt-0" id="navbar-default">
                    <ul>
                        {navbarSections.map((section, index) => (
                            <li><Link href={section?.path} className='text-lg | hover:text-green-600'>{section?.name}</Link></li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    )

}
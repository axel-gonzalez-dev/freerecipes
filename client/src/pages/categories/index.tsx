// Import utilities
import { useState, useEffect } from "react";
import Link from 'next/link';

// Import interfaces
import Category from "../../interfaces/Category";

export default function Categories() {

    const [categories, setCategories] = useState<Category[]>();

    useEffect(() => {

        getCategories();

    }, []);

    const getCategories = async () => {
        try {

            const { categories } = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
                .then(response => response.json());

            console.log(categories);

            setCategories(categories);

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <section className='grid grid-cols-auto gap-4'>
                {categories ? categories.map((category, index) => (
                    <Link key={index} href={`/categories/${category.strCategory}`}>
                        <div className='border border-gray-950 p-4'>
                            <img src={category?.strCategoryThumb} alt="" className='w-full max-w-[200px]' />
                            <h2>{category?.strCategory}</h2>
                            {/* <p>{category?.strCategoryDescription}</p> */}
                        </div>
                    </Link>
                ))
                    : <p>Loading...</p>
                }
            </section>
        </>
    )
}
// Import utilities
import { useState, useEffect } from "react";
import Link from 'next/link';

// Import interfaces
import Category from "../../interfaces/Category";

// Import components
import Card from '@/components/Card';

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
                        <Card imgSrc={category?.strCategoryThumb} title={category?.strCategory} description="" />
                    </Link>
                ))
                    : <p>Loading...</p>
                }
            </section>
        </>
    )
}
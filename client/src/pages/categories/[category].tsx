// Import utilities
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// Import interfaces
import Meal from "../../interfaces/Meal";
import Category from '@/interfaces/Category';

// Import components
import Card from '@/components/Card';

interface CategoryNameProps {
    category: string;
}

const CategoryName = () => {
    const router = useRouter();
    const { category } = router.query

    const [meals, setMeals] = useState<Meal[]>([]);

    useEffect(() => {

        if (!category) return;

        getMealsByCategory();
    }, [category]);

    const getMealsByCategory = async () => {
        try {

            const { meals } = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
                .then(response => response.json());

            setMeals(meals);

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <section className='grid grid-cols-auto gap-4'>
                {meals && meals.map((meal, index) => (
                    <Link href={`/recipe/${meal?.idMeal}`} key={index}>
                        <Card key={index} imgSrc={meal?.strMealThumb} title={meal?.strMeal} description={undefined} />
                    </Link>
                ))
                }
            </section>
        </>
    )
}

export async function getStaticPaths() {
    // Fetch all categories from the API
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
    const data = await response.json();
    const categories = data.categories;

    // Generate the paths for each category
    const paths = categories.map((category: Category) => ({
        params: { category: category.strCategory },
    }));

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }: { params: CategoryNameProps }) {
    const { category } = params;

    // Fetch meals by category
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const data = await response.json();
    const meals = data.meals;

    return {
        props: {
            category,
            meals,
        },
    };
}

export default CategoryName;
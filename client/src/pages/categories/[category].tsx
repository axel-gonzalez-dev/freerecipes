// Import utilities
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

// Import interfaces
import Meal from "../../interfaces/Meal";
import Category from '@/interfaces/Category';

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

            console.log(meals);

            setMeals(meals);

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <p>{category}</p>
            <section className='grid grid-cols-auto gap-4'>
                {meals && meals.map((meal, index) => (
                    <div key={index} className='border border-gray-950 p-4'>
                        <img src={meal?.strMealThumb} alt="Meal image" className='w-full max-w-[200px]' />
                        <h2>{meal?.strMeal}</h2>
                    </div>
                ))
                }
            </section>
        </>
    )
}

/*export async function GetStaticPaths() {
    try {

        const { categories } = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(response => response.json());

        // Generate the paths for each category
        const paths = categories.map((category:Category) => ({
            params: { category: category.strCategory },
        }));

        console.log(paths);
        return {
            paths,
            fallfack: false
        }

    } catch (error) {
        console.error(error);
    }
}*/

/*export async function getStaticProps({ params }: { params: CategoryNameProps}) {
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
  }*/

export default CategoryName;
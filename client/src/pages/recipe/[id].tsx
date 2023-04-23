// Import utilities
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

// Import interfaces
import Recipe from "@/interfaces/Recipe";

export default function Recipe() {

    const router = useRouter();
    const { id } = router.query

    const [recipe, setRecipe] = useState<Recipe>();

    useEffect(() => {

        if (!id) return;

        getRandomRecipe();
    }, [id]);

    const getRandomRecipe = async () => {
        try {

            const { meals } = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
                .then(response => response.json());

            setRecipe(meals[0]);

        } catch (error) {
            console.error(error);
        }
    }


    return (
        <>
            <section>

                <div className='mt-10 mb-10'>
                    <button className='px-4 py-2 | bg-uranianblue | text-white | rounded-lg | hover:bg-tiffanyblue' onClick={() => router.back()}>Back</button>
                </div>

                <div className='md:flex md:justify-around md:items-center | text-center'>
                    <h1 className='text-xl font-semibold'>{recipe?.strMeal}</h1>

                    <img src={recipe?.strMealThumb} className='w-56 h-56 | rounded-lg | mx-auto md:mx-0 | mt-10 md:mt-0' alt='Recipe meal' />
                </div>

                <div className='whitespace-break-spaces'>
                    <p className='mt-10 font-medium'>{recipe?.strInstructions}</p>
                </div>
            </section>

        </>
    )
}
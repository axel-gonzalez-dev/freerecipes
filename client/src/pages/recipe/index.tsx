// Import utilities
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Recipe() {

    useEffect(() => {
        console.log('Hello');
    }, []);

    return (
        <>
            <h1>Recipe</h1>
        </>
    )
}
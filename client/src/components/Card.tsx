
interface CardProps {
    imgSrc: string | undefined;
    title: string;
    description: string | undefined;
}
export default function Card({ imgSrc, title, description }: CardProps) {
    return (
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                {imgSrc && <img src={imgSrc} alt="Meal image" className='w-full object-contain' />}

                {title &&
                    <div className="px-6 py-4 text-center">
                        <div className="font-bold text-xl mb-2">{title}</div>
                    </div>
                }

                {description && <p className="text-gray-700 text-base">{description}</p>}
            </div>
        </>
    )
}
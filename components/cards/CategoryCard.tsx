import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Category{
    id: string,
    media: string,
    title: string
}

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => {
    const media = category.media;

  return (
    <Link href="/products" className='bg-gray-100 w-full px-10 py-6 rounded-lg max-sm:px-16 md:px-4 xl:px-20 lg:py-8 max-xxs:px-4'>
    <div className="flex flex-col items-center">
          <Image
            alt="Category"
            className="object-cover w-full h-60 rounded-lg max-sm:aspect-[4/3]"
            height={300}
            src={`${media}`}
            style={{
              aspectRatio: "300/300",
              objectFit: "cover",
            }}
            width={300}
          />

          <h3 className="text-body-bold mt-4 bg-black text-white py-2 rounded-md w-full text-center">{category.title}</h3>

    </div>
    </Link>
  );
};

export default CategoryCard;


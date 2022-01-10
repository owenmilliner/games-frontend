import { useEffect, useState } from 'react';
import { getCategories } from '../utils/api';

const CategoryList = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    getCategories().then((result) => setCategoryData(result));
  }, []);

  return (
    <div className='categories'>
      <ul className='categories__list'>
        {categoryData.map((category) => (
          <li key={category.slug} className='categories__list__element'>
            {category.slug}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;

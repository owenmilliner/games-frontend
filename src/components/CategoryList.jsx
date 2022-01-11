import { useEffect, useState } from 'react';
import { getCategories } from '../utils/api';

const CategoryList = ({ setCategoryFilter }) => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    getCategories().then((result) => setCategoryData(result));
  }, []);

  const handleCategoryFiltering = (newCategory) =>
    setCategoryFilter(newCategory);

  return (
    <div className='categories'>
      <ul className='categories__list'>
        <li
          key={'all'}
          className='categories__list__element'
          onClick={() => handleCategoryFiltering('all')}
        >
          all
        </li>
        {categoryData.map((category) => (
          <li
            key={category.slug}
            className='categories__list__element'
            onClick={() => handleCategoryFiltering(category.slug)}
          >
            {category.slug}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;

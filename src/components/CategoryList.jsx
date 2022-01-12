import { useEffect, useState } from 'react';
import { getCategories } from '../utils/api';

const CategoryList = ({ categoryFilter, setCategoryFilter }) => {
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
          key={''}
          id={'category__all'}
          className={
            categoryFilter === ''
              ? 'categories__list__element--state-active'
              : 'categories__list__element--state-inactive'
          }
          onClick={() => handleCategoryFiltering('')}
        >
          all
        </li>
        {categoryData.map((category) => (
          <li
            key={category.slug}
            id={`category__${category.slug}`}
            className={
              categoryFilter === category.slug
                ? 'categories__list__element--state-active'
                : 'categories__list__element--state-inactive'
            }
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

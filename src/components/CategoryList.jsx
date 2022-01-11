import { useEffect, useState } from 'react';
import { getCategories } from '../utils/api';

const CategoryList = ({ setCategoryFilter }) => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    getCategories().then((result) => setCategoryData(result));
  }, []);

  const handleCategoryFiltering = (newCategory) => {
    setCategoryFilter(newCategory);

    document.getElementsByClassName(
      'categories__list__element--state-active'
    )[0].className = 'categories__list__element--state-inactive';

    document.getElementById(`category__${newCategory}`).className =
      'categories__list__element--state-active';
  };

  return (
    <div className='categories'>
      <ul className='categories__list'>
        <li
          key={'all'}
          id={'category__all'}
          className='categories__list__element--state-active'
          onClick={() => handleCategoryFiltering('all')}
        >
          all
        </li>
        {categoryData.map((category) => (
          <li
            key={category.slug}
            id={`category__${category.slug}`}
            className='categories__list__element--state-inactive'
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

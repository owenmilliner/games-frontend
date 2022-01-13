const Sorting = ({
  sortValue,
  setSortValue,
  sortingOrder,
  setSortingOrder,
}) => {
  const availableSortValues = ['created_at', 'owner', 'category', 'votes'];

  const handleSortChange = (newSortValue) => {
    if (newSortValue === sortValue) {
      setSortingOrder(sortingOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortValue(newSortValue);
    }
  };

  return (
    <div className='sorting'>
      <ul className='sorting__list'>
        {availableSortValues.map((value) => {
          return (
            <li
              key={value}
              className={
                sortValue === value
                  ? 'sorting__list__element--state-active'
                  : 'sorting__list__element--state-inactive'
              }
              onClick={() => handleSortChange(value)}
            >
              {value === 'created_at'
                ? 'date'
                : value === 'owner'
                ? 'user'
                : value}
              {sortingOrder === 'desc' && sortValue === value
                ? '▼'
                : sortingOrder === 'asc' && sortValue === value
                ? '▲'
                : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sorting;

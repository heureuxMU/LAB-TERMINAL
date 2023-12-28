import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CheckStatusFunc } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const UpdateCategoryStatus = () => dispatch(CheckStatusFunc());
  const CategoriesStatus = useSelector((state) => state.CategoriesReducer);

  const categoryHeading = CategoriesStatus.length > 0 ? CategoriesStatus[0] : 'CATEGORIES';

  return (
    <div className="category-container">
      <h1 className="title">{categoryHeading}</h1>
      <button type="button" className="update-button" onClick={UpdateCategoryStatus}>
        Check Status
      </button>
    </div>
  );
};

export default Categories;

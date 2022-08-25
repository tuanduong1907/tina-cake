import Header from "../../../project/components/admin/app-layout/Header";
import AppCategoryItem from "../../../project/app-admin/app-category/AppCategoryItem";
import AppLoad from "../../../project/app-utils/AppLoad";
import AppModalStatus from "../../../project/app-modal/AppModalStatus";
import { useDispatch, useSelector } from "react-redux";
import {
  reset,
  getCategories,
} from "../../../shared/redux/admin/categories/categoriesSlice";
import styled from "styled-components";
import { useEffect } from "react";

// Styles
const CategoryStyles = styled.div`
  padding-top: 16px;
  .category {
    height: 100%;
    background: white;
    border-radius: 16px 16px 0 0;
    padding-block: 24px;
    ul {
      height: 100%;
      overflow-y: auto;
    }
  }
`;

const fakeData = [
  {
    id: "8w7fw98ef7",
    name: "Chả cá, ram",
  },
  {
    id: "s87vs98dvd",
    name: "Cá",
  },
  {
    id: "sd87sd9v8d",
    name: "Thịt",
  },
  {
    id: "sdv7sdv8d7",
    name: "Mực",
  },
  {
    id: "8d7g9df8gf",
    name: "Tôm",
  },
  {
    id: "6a5scs7saa",
    name: "hải sản khác",
  },
];

const Category = () => {
  const dispatch = useDispatch();
  const { data, isStatus, isError, isLoading, message } = useSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <>
      <Header location="category" status={isStatus || isError} />
      <CategoryStyles className="heightContent">
        <div className="category grid-content">
          <ul>
            {data &&
              data.length > 0 &&
              data.map((item) => (
                <AppCategoryItem key={item._id} data={item} />
              ))}
          </ul>
        </div>
      </CategoryStyles>
      {isLoading && <AppLoad />}
      {isStatus && (
        <AppModalStatus
          status={isStatus || isError}
          message={message || isError}
          close={() => dispatch(reset())}
        />
      )}
    </>
  );
};

export default Category;

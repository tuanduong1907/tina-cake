/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styled from "styled-components";
import { postListAdminData } from "../../../data/postListAdminData";
import { text18 } from "../../../shared/utils/mixin-styled";
import AppSearchForm from "../../controls/app-search-form/AppSearchForm";
import AppTable from "../../controls/app-table/AppTable";
import SvgDeleteIcon from "../../icons/DeleteIcon";
import SvgEditIcon from "../../icons/EditIcon";
import SvgEyeIcon from "../../icons/EyeIcon";

const headerTableData = [
  {
    id: 1,
    name: "Id",
  },
  {
    id: 2,
    name: "Bài viết",
  },
  {
    id: 3,
    name: "Danh mục",
  },
  {
    id: 4,
    name: "Tác giả",
  },
  {
    id: 5,
    name: "Thao tác",
  },
];

const TableListPostStyles = styled.div`
  background-color: #ffff;
  padding: 16px;
  border-radius: 8px;
  .post-item {
    display: flex;
    align-items: center;
    column-gap: 12px;
  }
  .post-image {
    width: 66px;
    height: 55px;
    border-radius: 8px;
    object-fit: cover;
  }
  .post-name {
    ${text18}
  }
  .post-time {
    color: ${(props) => props.theme.darkGrayColor};
  }
  .table-option {
    display: flex;
    align-items: center;
    gap: 16px;
    span {
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f4f7ff;
      border-radius: 8px;
      cursor: pointer;
    }
  }
`;

const TableListPost = () => {
  const [value, setValue] = useState("");
  console.log(value);
  const [activeInput, setActiveInput] = useState(false);
  return (
    <TableListPostStyles>
      <AppSearchForm
        className={`${activeInput ? "active" : ""}`}
        placeholder="Tìm kiếm"
        onFocus={() => setActiveInput(true)}
        onBlur={() => setActiveInput(false)}
        onChange={(e) => setValue(e.target.value)}
      ></AppSearchForm>
      <AppTable>
        <thead>
          <tr>
            {headerTableData.map((item) => (
              <th key={item.id}>{item.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {postListAdminData.length > 0 &&
            postListAdminData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <div className="post-item">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="post-image"
                    />
                    <div className="post-info-wrap">
                      <h3 className="post-name">{item.name}</h3>
                      <time className="post-time">Date: {item.date}</time>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="table-text">{item.category}</span>
                </td>
                <td>
                  <span className="table-text">{item.author}</span>
                </td>
                <td>
                  <div className="table-option">
                    <span>
                      <SvgEyeIcon></SvgEyeIcon>
                    </span>
                    <span>
                      <SvgEditIcon></SvgEditIcon>
                    </span>
                    <span>
                      <SvgDeleteIcon></SvgDeleteIcon>
                    </span>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </AppTable>
    </TableListPostStyles>
  );
};

export default TableListPost;

/* eslint-disable @next/next/no-img-element */
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { text14, text18 } from "../../../shared/utils/mixin-styled";
import AppSearchForm from "../../controls/app-search-form/AppSearchForm";
import AppTable from "../../controls/app-table/AppTable";
import { db } from "../../firebase/firebase-config";
import SvgDeleteIcon from "../../icons/DeleteIcon";
import SvgEditIcon from "../../icons/EditIcon";
import SvgEyeIcon from "../../icons/EyeIcon";
import Swal from "sweetalert2";
import { useRouter } from "next/router";

const headerTableData = [
  {
    id: 1,
    name: "STT",
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
    name: "Trạng thái",
  },
  {
    id: 6,
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
  .table-status {
    display: flex;
    align-items: center;
    gap: 12px;
    span {
      flex-shrink: 0;
      padding: 4px;
      border-radius: 4px;
      font-weight: 600;
      ${text14};
      user-select: none;
    }
    .hot {
      background-color: rgb(254 205 211);
      color: rgb(225 29 72);
    }
    .banner {
      background-color: rgb(219 234 254);
      color: rgb(37 99 235);
    }
  }
  .table-category-text {
    white-space: nowrap;
  }
`;

const TableListPost = () => {
  const route = useRouter();
  const [postList, setPostList] = useState([]);
  const [category, setCategory] = useState([]);
  const [value, setValue] = useState("");
  const [activeInput, setActiveInput] = useState(false);

  // Fetch posts list
  useEffect(() => {
    const colRefPosts = collection(db, "posts");
    onSnapshot(colRefPosts, (snapshot) => {
      let resultPosts = [];
      snapshot.forEach((doc) => {
        resultPosts.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPostList(resultPosts);
    });
  }, []);
  // end Fetch posts list

  // fetch Categries
  useEffect(() => {
    const colRefCategories = collection(db, "categories");
    onSnapshot(colRefCategories, (snapshot) => {
      let resultCategories = [];
      snapshot.forEach((category) => {
        resultCategories.push({
          id: category.id,
          ...category.data(),
        });
      });
      setCategory(resultCategories);
    });
  }, []);
  // end fetch Categries

  // Handle delete post
  const handleDeletePost = async (docId) => {
    const conRefSinglePost = doc(db, "posts", docId);
    Swal.fire({
      title: "Bạn muốn xóa bài viết này?",
      text: "Sau khi xóa bạn sẽ không thể khôi phục lại bài viết!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Có, Tôi đồng ý!",
      cancelButtonText: "Hủy",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteDoc(conRefSinglePost);
        Swal.fire("Đã xóa thành công!", "Bài viết đã bị xóa.", "success");
      }
    });
    // console.log("docData", docData.data());
  };
  // end Handle delete post

  const handleUpdatePost = async (docId) => {
    route.push(`/admin/bai-viet/cap-nhat-bai-viet/${docId}`);
  };

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
          {postList?.length > 0 &&
            postList?.map((item, index) => (
              <tr key={item.id}>
                <td> {index + 1 < 10 ? `0${index + 1}` : `${index + 1}`} </td>
                <td>
                  <div className="post-item">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="post-image"
                    />
                    <div className="post-info-wrap">
                      <h3 className="post-name">{item.title}</h3>
                      <time className="post-time">
                        Ngày đăng:{" "}
                        {`${new Date(
                          item?.createAt?.seconds * 1000
                        ).toLocaleDateString("vi-VI")}`}{" "}
                      </time>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="table-text">
                    {category.map((categoryItem) => (
                      <Fragment key={categoryItem.id}>
                        {categoryItem.id === item.categoryId ? (
                          <span className="table-category-text">
                            {categoryItem.value}
                          </span>
                        ) : (
                          ""
                        )}
                      </Fragment>
                    ))}
                  </span>
                </td>
                <td>
                  <span className="table-text">Na Na</span>
                </td>
                <td>
                  <div className="table-status">
                    {item.hot === true && <span className="hot">Nổi bật</span>}
                    {item.banner === true && (
                      <span className="banner">Banner</span>
                    )}
                  </div>
                </td>
                <td>
                  <div className="table-option">
                    <span>
                      <SvgEyeIcon></SvgEyeIcon>
                    </span>
                    <span onClick={() => handleUpdatePost(item.id)}>
                      <SvgEditIcon></SvgEditIcon>
                    </span>
                    <span onClick={() => handleDeletePost(item.id)}>
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

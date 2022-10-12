/* eslint-disable @next/next/no-img-element */
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  limit,
  query,
  getDocs,
  startAfter,
  where,
} from "firebase/firestore";
import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import { text14, text16, text18 } from "../../../shared/utils/mixin-styled";
import AppSearchForm from "../../controls/app-search-form/AppSearchForm";
import AppTable from "../../controls/app-table/AppTable";
import { db } from "../../firebase/firebase-config";
import SvgDeleteIcon from "../../icons/DeleteIcon";
import SvgEditIcon from "../../icons/EditIcon";
import SvgEyeIcon from "../../icons/EyeIcon";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import Link from "next/link";
import AppButton from "../../controls/app-button/AppButton";
import useSearchFilter from "../../../shared/hooks/useSearchFilter";
import EmtyLayout from "../emtyLayout/EmtyLayout";
import { debounce } from "lodash";

const headerTableData = [
  {
    id: 1,
    name: "STT",
  },
  {
    id: 2,
    name: "Bài viết Banner",
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

const TableListBannerStyles = styled.div`
  margin: 104px 32px 80px 32px;
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
  .btn-loadmore {
    margin-inline: auto;
    margin-top: 40px;
  }

  /* Mobile & tablet: width <1024px */
  @media only screen and (max-width: 1023px) {
    .post-item {
      min-width: 800px;
    }
    .post-name {
      ${text16}
    }
    .post-time {
      ${text14}
    }
    .table-category-text {
      ${text16}
    }
  }
`;

const TableListBanner = () => {
  const route = useRouter();
  const [postList, setPostList] = useState([]);
  const [category, setCategory] = useState([]);
  const [value, setValue] = useState("");
  const [activeInput, setActiveInput] = useState(false);
  const [total, setTotal] = useState(0);
  const [lastDoc, setLastDoc] = useState();
  const { dataFilter } = useSearchFilter(postList);
  // Fetch Data Post
  useEffect(() => {
    async function fetchData() {
      const colRef = collection(db, "banner");
      const newRef = query(colRef, orderBy("createAt", "desc"), limit(10));
      const documentSnapshots = await getDocs(newRef);
      const lastVisible =
        documentSnapshots.docs[documentSnapshots.docs.length - 1];
      setLastDoc(lastVisible);

      onSnapshot(colRef, (snapshot) => {
        setTotal(snapshot.size);
      });

      onSnapshot(newRef, (snapshot) => {
        let result = [];
        snapshot.forEach((doc) => {
          result.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setPostList(result);
      });
      setLastDoc(lastVisible);
    }
    fetchData();
  }, []);
  // end Fetch Data Post

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

  // filter input debounce
  const handleFilterInput = debounce((e) => {
    setValue(e.target.value);
  }, 500);
  // end filter input debounce

  const handleUpdatePost = async (docId) => {
    route.push(`/admin/bai-viet/cap-nhat-banner/${docId}`);
  };

  return (
    <TableListBannerStyles>
      <AppSearchForm
        className={`${activeInput ? "active" : ""}`}
        placeholder="Tìm kiếm banner"
        onFocus={() => setActiveInput(true)}
        onBlur={() => setActiveInput(false)}
        onChange={handleFilterInput}
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
            (dataFilter(value) || postList)
              ?.sort((a, b) =>
                a.createAt.seconds < b.createAt.seconds ? 1 : -1
              )
              .map((item, index) => (
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
                      {item.hot === true && (
                        <span className="hot">Nổi bật</span>
                      )}
                      {item.banner === true && (
                        <span className="banner">Banner</span>
                      )}
                    </div>
                  </td>
                  <td>
                    <div className="table-option">
                      <span>
                        <Link href={`/${item.slug}`}>
                          <a target="_blank">
                            <SvgEyeIcon></SvgEyeIcon>
                          </a>
                        </Link>
                      </span>
                      <span onClick={() => handleUpdatePost(item.id)}>
                        <SvgEditIcon></SvgEditIcon>
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
        </tbody>
      </AppTable>
      {(dataFilter(value) || postList)?.length === 0 && (
        <div className="emty-wrapper">
          <EmtyLayout
            text={`Xin lỗi, không tìm thấy bất kỳ kết quả phù hợp nào cho “${value}”`}
          />
        </div>
      )}
    </TableListBannerStyles>
  );
};

export default TableListBanner;

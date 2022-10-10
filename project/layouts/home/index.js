/* eslint-disable react-hooks/exhaustive-deps */
import { productData } from "../../../data/productData";
import Banner from "../../components/banner/Banner";
import HeadSeo from "../../components/SEO";
import NewsLayout from "./newsLayout/NewsLayout";
import ProductLayout from "./productLayout/ProductLayout";
import FeedbackLayout from "./feedbackLayout/FeedbackLayout";
import { feedbackData } from "../../../data/feedbackData";
import { useEffect, useState } from "react";
import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/firebase-config";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [postDay, setPostDay] = useState([]);
  const [sorted, setSorted] = useState({ sorted: "id", reversed: false });
  console.log("postDay", postDay);

  // Fetch Data Post
  useEffect(() => {
    const colRef = collection(db, "posts");
    const queries = query(colRef, where("hot", "==", true), limit(3));
    onSnapshot(queries, (snapshot) => {
      let result = [];
      snapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPosts(result);
    });
  }, []);
  // end Fetch Data Post

  // fetch data post day
  useEffect(() => {
    const colRef = collection(db, "posts");
    const queries = query(colRef, limit(4));
    onSnapshot(queries, (snapshot) => {
      let resultPostDay = [];
      snapshot.forEach((doc) => {
        resultPostDay.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPostDay(resultPostDay);
    });
  }, []);
  // end fetch data post day

  return (
    <>
      <HeadSeo title="Trang chủ | Tina Cake" />
      <Banner></Banner>
      <NewsLayout
        title="Tin tức nổi bật"
        link="danh-sach-bai-viet"
        data={posts}
      ></NewsLayout>

      <ProductLayout
        link="/banh-kem-hot-trend"
        title="Bánh hottrend 2022"
        data={productData}
        background
      ></ProductLayout>
      <NewsLayout
        title="Tin tức mỗi ngày"
        link="danh-sach-bai-viet"
        data={postDay}
      ></NewsLayout>
      <FeedbackLayout
        title="Phản hồi từ khách hàng"
        data={feedbackData}
        link="https://www.google.com/search?q=banhkemnhatrangtina&oq=banhkemnhatrangtina&aqs=chrome..69i57j69i60l4.5409j0j7&sourceid=chrome&ie=UTF-8#lrd=0x317067bd70765427:0xcab555b4ef08718b,1,,,"
      ></FeedbackLayout>
    </>
  );
}

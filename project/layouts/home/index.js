/* eslint-disable react-hooks/exhaustive-deps */
import { productData } from "../../../data/productData";
import Banner from "../../components/banner/Banner";
import HeadSeo from "../../components/SEO";
import NewsLayout from "./newsLayout/NewsLayout";
import ProductLayout from "./productLayout/ProductLayout";
import FeedbackLayout from "./feedbackLayout/FeedbackLayout";
import { feedbackData } from "../../../data/feedbackData";

import NewsLatestLayout from "./newsLastestLayout/NewsLastestLayout";

export default function HomePage() {
  return (
    <>
      <HeadSeo title="Trang chủ | Tina Cake" />
      <Banner></Banner>
      <NewsLayout
        title="Tin tức nổi bật"
        link="danh-sach-bai-viet"
      ></NewsLayout>

      <ProductLayout
        link="#"
        title="Bánh Kem Tina 2022"
        data={productData}
        background
      ></ProductLayout>
      <NewsLatestLayout
        title="Tin tức mỗi ngày"
        link="danh-sach-bai-viet"
      ></NewsLatestLayout>

      <FeedbackLayout
        title="Phản hồi từ khách hàng"
        data={feedbackData}
        link="https://www.google.com/search?q=banhkemnhatrangtina&oq=banhkemnhatrangtina&aqs=chrome..69i57j69i60l4.5409j0j7&sourceid=chrome&ie=UTF-8#lrd=0x317067bd70765427:0xcab555b4ef08718b,1,,,"
      ></FeedbackLayout>
    </>
  );
}

import Head from "next/head";
const HeadSeo = (props) => {
  return (
    <Head>
      <title>{props.title || "Trang chủ | Tina Cake"}</title>
      <meta name="keywords" content="your, tags" />
      <meta name="description" content={props.description} />
      <meta name="copyright" content="Tina Cake" />
      <meta name="language" content="ES" />
      <meta name="robots" content="index,follow" />
      <meta name="author" content="Tina cake Nha Trang" />
      <meta name="url" content="https://tina-cake.vercel.app/" />
      <meta
        property="og:title"
        content={props.title || "Trang chủ | Tina Cake"}
      />
      <meta
        data-n-head="ssr"
        name="keywords"
        content="Bánh Kem Nha Trang Tina Cake - Bánh sinh Nhật Nha Trang - Bánh fondant - Cupcake  – Cửa hàng bánh Sinh Nhật – Bánh Cưới chuyên bán sẵn, nhận đặt, làm tươi và giao nhanh các loại bánh kem sinh nhật, thôi nôi trong vòng 1-8 giờ nhận đơn. Mẫu mã hiện đại, đáp ứng nhu cầu của những khách hàng cần bánh gấp, đòi hỏi cao về chất lượng bánh và kem (mới ra lò), đặc biệt là khách du lịch ở Nha Trang."
      ></meta>
      <meta property="og:description" content={props.description} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content="https://tina-cake.vercel.app/" />
      <meta
        property="og:image"
        content={
          props.image ||
          "https://firebasestorage.googleapis.com/v0/b/backend-tina-cake.appspot.com/o/avatar.jpg?alt=media&token=93c15490-efec-4d4d-9574-0f0cf008d76a"
        }
      />
    </Head>
  );
};
export default HeadSeo;

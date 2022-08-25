import Head from 'next/head';
const HeadSeo = (props) => {
    return (
        <Head>
            <title>{props.title}</title>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"></meta>
            <meta charSet="UTF-8"></meta>
            <meta property="og:locale" content="vi_VN"></meta>
            <meta name="viewport" content="width=device-width, initial-scale = 1.0"></meta>
            <meta property="og:title" content={props.og}></meta>
            <meta property="og:description" content="Với Thegioipet, việc mua bán, trao đổi, tìm kiếm thú cưng, sản phẩm và dịch vụ cho thú cưng trở nên hiệu quả và tin cậy hơn. Bạn sẽ dễ dàng tìm được thú cưng và sản phẩm ưng ý nhất với giá hợp lý."></meta>
            <meta name='description' content={props.description}></meta>
            <meta name="full-screen" content="yes"></meta>
            <meta name="apple-mobile-web-app-capable" content="yes"></meta>
            <meta name="mobile-web-app-capable" content="yes"></meta>
            <meta name="apple-mobile-web-app-title" content="Thế giới Pét"></meta>
            <meta name="keywords" content="Dịch vụ chăm sóc thú cưng, mua bán thú cưng, trao đổi thú cưng, chó cảnh, mèo cảnh, mua bán chó đẹp, mua bán mèo đẹp, mua bán kì lân đẹp, cá cảnh, cá cảnh đẹp" ></meta>
            <meta property="og:url" content=""></meta>
            <meta property="og:image" content="https://agrilifetoday.tamu.edu/wp-content/uploads/2020/07/AdobeStock_84016419.jpeg"></meta>
            <meta property="og:image:url" content="https://agrilifetoday.tamu.edu/wp-content/uploads/2020/07/AdobeStock_84016419.jpeg"></meta>
            <meta property="og:image:width" content="600"></meta>
            <meta property="og:image:height" content="320"></meta>
            <meta property="og:site_name" content="thegioipet.vn"></meta>
            <meta property="og:rich_attachment" content="true"></meta>
            <meta property="og:type" content="article"></meta>
            <meta property="static-url" content=""></meta>
            <meta property="hotline" content="0378183049"></meta>
            <meta name="author" content="thegioipet.vn"></meta>
            <link rel="shortcut icon" href={`%PUBLIC_URL%/static/logo-main.png`} />
            <link rel="apple-touch-icon" href='/logo-main.png' />
        </Head>
    )
}
export default HeadSeo
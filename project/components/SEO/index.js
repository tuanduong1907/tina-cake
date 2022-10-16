import Head from 'next/head';
const HeadSeo = (props) => {
    return (
        <Head>
            <title>{props.title || 'Trang chủ | Tina Cake'}</title>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"></meta>
            <meta charSet="UTF-8"></meta>
            <meta property="og:locale" content="vi_VN"></meta>
            <meta name="viewport" content="width=device-width, initial-scale = 1.0"></meta>
            <meta property="og:title" content={props.og}></meta>
            <meta property="og:description" content={props.description || '- Bánh sinh Nhật Nha Trang - Bánh fondant - Cupcake – Cửa hàng bánh Sinh Nhật – Bánh Cưới chuyên bán sẵn, nhận đặt, ...'}></meta>
            <meta name='description' content={props.description}></meta>
            <meta name="full-screen" content="yes"></meta>
            <meta name="apple-mobile-web-app-capable" content="yes"></meta>
            <meta name="mobile-web-app-capable" content="yes"></meta>
            <meta name="apple-mobile-web-app-title" content="Bánh Kem Nha Trang Tina Cake"></meta>
            <meta name="keywords" content={props.key || 'Bánh Kem Nha Trang Tina là tiệm bánh sinh nhật - bánh cưới Nha Trang chuyên bán sẵn, nhận đặt, làm tươi và giao nhanh các loại bánh kem sinh nhật, thôi nôi. Nhận đặt các loại bánh Âu sinh nhật, bánh kem sinh nhật fondant và cupcake tại Nha Trang'} ></meta>
            <meta property="og:url" content=""></meta>
            <meta property="og:image" content={props.image || 'https://firebasestorage.googleapis.com/v0/b/backend-tina-cake.appspot.com/o/avatar.jpg?alt=media&token=93c15490-efec-4d4d-9574-0f0cf008d76a'}></meta>
            <meta property="og:image:url" content={props.image || 'https://firebasestorage.googleapis.com/v0/b/backend-tina-cake.appspot.com/o/avatar.jpg?alt=media&token=93c15490-efec-4d4d-9574-0f0cf008d76a'}></meta>
            <meta property="og:image:width" content="600"></meta>
            <meta property="og:image:height" content="320"></meta>
            <meta property="og:site_name" content="banhkemnhatrangtina.com"></meta>
            <meta property="og:rich_attachment" content="true"></meta>
            <meta property="og:type" content="article"></meta>
            <meta property="static-url" content=""></meta>
            <meta property="hotline" content="0935323287"></meta>
            <meta name="author" content="banhkemnhatrangtina.com"></meta>
            <link rel="shortcut icon" href={`https://firebasestorage.googleapis.com/v0/b/backend-tina-cake.appspot.com/o/favico.png?alt=media&token=9cf12f5a-d5ed-4377-bdc5-208b7acd2281`} />
            <link rel="apple-touch-icon" href='/logo-main.png' />
        </Head>
    )
}
export default HeadSeo
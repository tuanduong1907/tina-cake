import Head from 'next/head';
const HeadSeo = (props) => {
    return (
        <Head>
            <title>{props.title || "Trang chủ | Tina Cake"}</title>
            <meta property="og:title" content={props.title || "Trang chủ | Tina Cake"} />
            <meta property="og:description" content={props.description} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content="https://tina-cake.vercel.app/" />
            <meta property="og:image" content={props.image || 'https://firebasestorage.googleapis.com/v0/b/backend-tina-cake.appspot.com/o/avatar.jpg?alt=media&token=93c15490-efec-4d4d-9574-0f0cf008d76a'}/>
        </Head>
    )
}
export default HeadSeo
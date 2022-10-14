import { useRouter } from "next/router";
import { Footer } from "../project/components/footer";
import { Header } from "../project/components/header";
import NewsDetailPage from "../project/layouts/newsDetailPage";

export default function DetailProduct() {
  const route = useRouter();
  const postSlug = route.query.postSlug;

  console.log("postSlug", postSlug);

  return (
    <>
      <Header></Header>
      <NewsDetailPage slug={postSlug}></NewsDetailPage>
      <Footer></Footer>
    </>
  );
}

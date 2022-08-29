import { Footer } from "../../project/components/footer";
import { Header } from "../../project/components/header";
import NewsListPage from "../../project/layouts/newsListPage";

export default function Home() {
  return (
    <>
      <Header></Header>
      <NewsListPage></NewsListPage>
      <Footer></Footer>
    </>
  );
}

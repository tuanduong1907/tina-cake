import { Footer } from "../project/components/footer";
import { Header } from "../project/components/header";
import HomePage from "../project/layouts/home";

export default function Home() {

  return (
    <>
      <Header className="header-home"></Header>
      <HomePage />
      <Footer></Footer>
    </>
  );
}

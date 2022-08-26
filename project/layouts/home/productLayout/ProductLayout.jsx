import HeadSeo from "../../../components/SEO";
import styled from "styled-components";
import AppHeading from "../../../controls/app-heading/AppHeading";
import Link from "next/link";
import SvgRightIcon from "../../../icons/RightIcon";
import ProductList from "../../../components/ProductList";
import AppHeaderTitle from "../../../controls/app-header-title/AppHeaderTitle";
import ProductItem from "../../../components/ProductItem";
import { Swiper, SwiperSlide } from "swiper/react";
// styles
const ProductPageStyles = styled.section`
  .banner-product {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    margin-bottom: 0 !important;
  }

  &.bg-layout {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("https://images.unsplash.com/photo-1614145121029-83a9f7b68bf4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80");
    background-attachment: fixed;

    background-position: center;
    background-size: cover;
    .link-detail {
      color: ${(props) => props.theme.primaryColor};
    }
    .icon-right {
      fill: ${(props) => props.theme.primaryColor};
    }
    .HeadingStyles {
      color: #ffff;
    }
    .ProdcutItemStyles {
      background: linear-gradient(
        146.73deg,
        rgba(255, 255, 255, 0.08) 3.5%,
        rgba(255, 255, 255, 0.01) 98.73%
      );
      backdrop-filter: blur(50px);
    }
    .product-name {
      color: #fff;
    }
  }
  .product-list-slide {
    margin-top: 40px;
  }

  /* Responsive */

  /* Mobile & tablet: width <1024px */
  @media only screen and (max-width: 1023px) {
    .product-list {
      display: none;
    }
  }
  /* Mobie: width < 740px */
  @media only screen and (max-width: 739px) {
    &.bg-layout {
      background-attachment: initial;
    }
    .product-list-slide {
      .swiper-slide {
        width: 85% !important;
      }
    }
  }
  /* Tablet: width >= 740px and width < 1024px */
  @media only screen and (min-width: 740px) and (max-width: 1023px) {
    .product-list-slide {
      .swiper-slide {
        width: 45% !important;
      }
    }
  }
  /* PC Low */
  @media (min-width: 1024px) and (max-width: 1239px) {
    .product-list-slide {
      display: none;
    }
  }
  /* PC: width >= 1024px */
  @media only screen and (min-width: 1024px) {
    .product-list-slide {
      display: none;
    }
  }
`;
// end styles

export default function ProductLayout({
  link = "",
  title = "",
  data,
  background,
}) {
  return (
    <>
      <HeadSeo />
      <ProductPageStyles className={` ${background ? "bg-layout" : ""}`}>
        <div className="container py-layout">
          <AppHeaderTitle title={title} link={link}></AppHeaderTitle>
          <ProductList data={data} className="product-list"></ProductList>
          <div className="product-list-slide">
            <Swiper grabCursor={true} spaceBetween={24} slidesPerView={"auto"}>
              {data?.length > 0 &&
                data?.map((item) => (
                  <SwiperSlide key={item.id}>
                    <ProductItem
                      link={item.link}
                      image={item.image}
                      name={item.name}
                      price={item.price}
                    ></ProductItem>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </ProductPageStyles>
    </>
  );
}

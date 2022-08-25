import AppModalForm from "../../../app-admin/app-ModalFom/AppModalForm";
import AppButton from "../../../controls/app-button/AppButton";
import styled from "styled-components";
import * as mixins from "../../../../shared/utils/mixin-styled";
import { useCallback, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import {
  closeModalForm,
  openModalForm,
} from "../../../../shared/redux/admin/common/commonSlice";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import queryString from "query-string";

// Styles
const HeaderAdminStyles = styled.header`
  height: ${(props) => props.theme.header};
  ${mixins.flexBetween}
  h1 {
    ${mixins.darkBlueColor}
    ${mixins.text20}
    font-weight: 700;
  }
  .headerAdminAdd {
    padding: unset;
    width: 40px;
    font-size: 26px;
    font-weight: 500;
  }
  /* Mobie: width < 740px */
  @media only screen and (max-width: 739px) {
    .headerAdminAdd {
      &:hover {
        opacity: unset;
      }
      &:active {
        opacity: 0.7;
      }
    }
  }
`;

const heading = {
  category: "Danh mục",
};

const Header = ({ location, status }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { isModalForm } = useSelector((state) => state.common);

  const CloseModal = useCallback(() => {
    dispatch(closeModalForm());
  }, [dispatch]);

  useEffect(() => {
    const idItem = queryString.parse(window.location.search).idItem;
    if (!isModalForm && idItem) {
      router.replace({
        pathname: router.pathname,
        search: "",
      });
    }
  }, [isModalForm]);
  return (
    <>
      <HeaderAdminStyles className="headerAdmin grid-content">
        <h1>{heading[location]}</h1>
        <div>
          <AppButton
            className="headerAdminAdd primary rounded"
            onClick={() => dispatch(openModalForm("create"))}
          >
            +
          </AppButton>
        </div>
      </HeaderAdminStyles>
      <AnimatePresence>
        {isModalForm && (
          <AppModalForm
            form={isModalForm}
            close={CloseModal}
            location={location}
            status={status}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default memo(Header);

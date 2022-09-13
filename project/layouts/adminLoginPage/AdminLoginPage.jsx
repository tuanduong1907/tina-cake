/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { text28, text34 } from "../../../shared/utils/mixin-styled";
import AppButtonAdmin from "../../controls/app-button-admin/AppButtonAdmin";
import AppField from "../../controls/app-field/AppField";
import AppInput from "../../controls/app-input/AppInput";
import AppLabel from "../../controls/app-label/AppLabel";
import SvgEyeCloseIcon from "../../icons/EyeCloseIcon";
import SvgEyeOpenIcon from "../../icons/EyeOpenIcon";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

const schema = yup
  .object({
    account: yup.string().required("Vui lòng nhập tài khoản !!!"),
    password: yup.string().required("Vui lòng nhập mật khẩu !!!"),
  })
  .required();

const AdminLoginPageStyles = styled.section`
  height: 100vh;
  overflow: hidden;
  position: relative;
  z-index: 1;
  background-color: ${(props) => props.theme.lightGrayColor};
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 60px;
  .login-logo {
    margin-top: 80px;
  }
  .form-wrapper {
    padding: 30px;
    max-width: 600px;
    width: 100%;
    background: #ffff;
    backdrop-filter: blur(16px);
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 12px;
  }
  .form-heading {
    ${text34}
    text-align: center;
    margin-bottom: 24px;
  }
  /* Mobie: width < 740px */
  @media only screen and (max-width: 739px) {
    & {
      padding-inline: 20px;
    }
    .form-heading {
      ${text28}
    }
    .form-wrapper {
      padding: 20px;
    }
  }
`;

const AdminLoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
    reset,
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });
  console.log(errors);
  const handleLogin = (values) => {
    if (!isValid) return;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };
  const [togglePassword, setTogglePassword] = useState(false);

  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        pauseOnHover: false,
      });
    }
  }, [errors]);

  return (
    <AdminLoginPageStyles>
      <div className="login-logo">
        <Link href="#">
          <a className="login-logo">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/backend-tina-cake.appspot.com/o/logo-tina.png?alt=media&token=12cc58f5-7148-4518-9906-d118f48f1470"
              alt=""
            />
          </a>
        </Link>
      </div>
      <div className="form-wrapper">
        <h2 className="form-heading">Đăng nhập</h2>
        <form
          className="form"
          onSubmit={handleSubmit(handleLogin)}
          autoComplete="off"
        >
          <AppField>
            <AppLabel htmlFor="account">Tài khoản</AppLabel>
            <AppInput
              name="account"
              type="text"
              placeholder="Nhập tài khoản"
              control={control}
            />
          </AppField>
          <AppField>
            <AppLabel htmlFor="password">Mật khẩu</AppLabel>
            <AppInput
              name="password"
              type={togglePassword ? "text" : "password"}
              placeholder="Nhập mật khẩu"
              control={control}
            >
              {togglePassword ? (
                <SvgEyeOpenIcon
                  onClick={() => setTogglePassword(false)}
                ></SvgEyeOpenIcon>
              ) : (
                <SvgEyeCloseIcon
                  onClick={() => setTogglePassword(true)}
                ></SvgEyeCloseIcon>
              )}
            </AppInput>
          </AppField>
          <AppButtonAdmin
            type="submit"
            disabled={isSubmitting}
            isLoading={isSubmitting}
          >
            Đăng nhập
          </AppButtonAdmin>
        </form>
      </div>
    </AdminLoginPageStyles>
  );
};

export default AdminLoginPage;

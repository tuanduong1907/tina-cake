/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { text24, text28, text34 } from "../../../shared/utils/mixin-styled";
import AppButtonAdmin from "../../controls/app-button-admin/AppButtonAdmin";
import AppField from "../../controls/app-field/AppField";
import AppInput from "../../controls/app-input/AppInput";
import AppLabel from "../../controls/app-label/AppLabel";
import SvgEyeCloseIcon from "../../icons/EyeCloseIcon";
import SvgEyeOpenIcon from "../../icons/EyeOpenIcon";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";
import { useRouter } from "next/router";
import { useAuth } from "../../contexts/auth-context";
import toast from "react-hot-toast";
import HeadSeo from "../../components/SEO";

const schema = yup
  .object({
    email: yup.string().required("Vui lòng nhập tài khoản !!!"),
    password: yup.string().required("Vui lòng nhập mật khẩu !!!"),
  })
  .required();

const AdminLoginPageStyles = styled.section`
  height: 100vh;
  overflow: hidden;
  position: relative;
  z-index: 1;
  background-color: ${(props) => props.theme.lightGrayColor};
  .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  display: flex;
  .login-wrapper {
    max-width: 500px;
    width: 100%;
    padding: 48px 32px;
    display: flex;
    flex-direction: column;
    gap: 80px;
    background-color: #ffff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
  .login-image-wrap {
    width: 100%;
    background: url("https://firebasestorage.googleapis.com/v0/b/backend-tina-cake.appspot.com/o/background-1.jpg?alt=media&token=149ee26b-b2e7-47a5-b047-dd5073db8789");
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.4);
    }
  }
  .login-logo {
    margin-top: 40px;
  }
  .login-link {
    img {
      height: 80px;
    }
  }
  .form-wrapper {
    padding: 24px;
    border-radius: 16px;
  }
  .form-heading {
    ${text24}
    margin-bottom: 24px;
  }
  .forget-password {
    margin-block: 12px;
    display: inline-block;
    text-align: right;
    font-weight: 500;
  }
  /* Mobile & tablet: width <1024px */
  @media only screen and (max-width: 1023px) {
    .login-image-wrap {
      display: none;
    }
    .login-wrapper {
      width: 100%;
      max-width: 100%;
    }
    .login-link {
      img {
        margin-inline: auto;
      }
    }
    .form-heading {
      text-align: center;
    }
  }

  /* Tablet: width >= 740px and width < 1024px */
  @media only screen and (min-width: 740px) and (max-width: 1023px) {
    .login-wrapper {
      gap: 40px;
    }
    .form-heading {
      ${text34}
    }
  }

  /* Mobie: width < 740px */
  @media only screen and (max-width: 739px) {
    .form-heading {
      ${text28}
      text-align: center;
    }
    .form-wrapper {
      padding: 20px;
    }
    .login-wrapper {
      padding: 0;
      gap: 20px;
    }
  }
`;

const AdminLoginPage = () => {
  const router = useRouter();
  const { userInfo } = useAuth();
  const [togglePassword, setTogglePassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  useEffect(() => {
    if (userInfo?.email) router.push("/admin");
  }, [userInfo?.email]);

  const handleLogin = async (values) => {
    if (!isValid) return;
    await signInWithEmailAndPassword(auth, values.email, values.password);
    toast.success("Đăng nhập thành công!");
    router.push("/admin");
  };

  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message);
    }
  }, [errors]);

  return (
    <>
      <HeadSeo title="Đăng nhập | Tina Cake" />
      <AdminLoginPageStyles>
        <div className="login-wrapper">
          <div className="login-logo">
            <Link href="#">
              <a className="login-link">
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
                <AppLabel htmlFor="email">Tài khoản</AppLabel>
                <AppInput
                  name="email"
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
              <Link href="#">
                <a className="forget-password">Quên mật khẩu?</a>
              </Link>
              <AppButtonAdmin
                type="submit"
                disabled={isSubmitting}
                isLoading={isSubmitting}
              >
                Đăng nhập
              </AppButtonAdmin>
            </form>
          </div>
        </div>
        <div className="login-image-wrap"></div>
      </AdminLoginPageStyles>
    </>
  );
};

export default AdminLoginPage;

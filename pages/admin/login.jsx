import AppAuth from "../../project/app-admin/app-authentication/AppAuth";
import AppLogin from "../../project/components/admin/app-login/AppLogin";
import AppLoad from "../../project/app-utils/AppLoad";
import { reset } from "../../shared/redux/admin/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useEffect } from "react";
import { setAccessToken, validToken } from "../../shared/utils/token";
// Styles
const LoginStyles = styled.div`
  width: 100%;
`;

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isStatus, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isSuccess) {
      setAccessToken(user.AccessToken);
      router.push("/admin");
    }
    if(isStatus) {
      alert(isStatus + ': ' + message)
    }
    if (isError) {
      alert(message);
    }
    dispatch(reset());
  }, [user, isError, isSuccess, isStatus, message]);

  if (validToken()) {
    router.push("/admin");
  } else {
    return (
      <AppAuth text="Vui lòng đăng nhập để tiếp tục!">
        <LoginStyles className="admin-login">
          <AppLogin />
          {isLoading && <AppLoad />}
        </LoginStyles>
      </AppAuth>
    );
  }
};

export default Login;

Login.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

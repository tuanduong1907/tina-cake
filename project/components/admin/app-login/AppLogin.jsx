import AppForm from "../../../app-form/AppForm";
import AppFormGroup from "../../../app-form/AppFormGroup";
import AppFormSubmit from "../../../app-form/AppFormSubmit";
import AppControls from "../../../controls/app-controls/AppControls";
import AppButton from "../../../controls/app-button/AppButton";
import { useDispatch } from "react-redux";
import { memo } from "react";
import { login } from "../../../../shared/redux/admin/auth/authSlice";
// hook
import { useState } from "react";

const AppLogin = () => {
  // hook
  const dispatch = useDispatch();
  // state
  const [data, setData] = useState({
    TenDangNhap: "",
    MatKhau: "",
  });
  const [err, setErr] = useState({});

  // Handle Function
  const HandleSubmit = (e) => {
    e.preventDefault();
    let messageErr = {};
    if (!data.TenDangNhap) {
      messageErr.TenDangNhap = "Vui lòng nhập tên đăng nhập!";
    }
    if (!data.MatKhau) {
      messageErr.MatKhau = "Vui lòng nhập mật khẩu!";
    } else {
      dispatch(login(data));
    }
    setErr(messageErr);
  };

  const HandleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    setErr({
      ...err,
      [e.target.name]: "",
    });
  };

  return (
    <AppForm className="app-login" id="login-form" onSubmit={HandleSubmit}>
      <AppFormGroup>
        <AppControls
          type="text"
          name="TenDangNhap"
          placeholder="Tên đăng nhập"
          value={data.TenDangNhap}
          onChange={HandleChange}
        />
        {err?.TenDangNhap && (
          <span className="form-messageErr">{err.TenDangNhap}</span>
        )}
      </AppFormGroup>
      <AppFormGroup>
        <AppControls
          type="password"
          placeholder="Mật khẩu"
          name="MatKhau"
          value={data.MatKhau}
          onChange={HandleChange}
        />
        {err?.MatKhau && <span className="form-messageErr">{err.MatKhau}</span>}
      </AppFormGroup>
      <AppFormSubmit>
        <AppButton className="primary rounded" width="100%">
          Đăng Nhập
        </AppButton>
      </AppFormSubmit>
    </AppForm>
  );
};

export default memo(AppLogin);

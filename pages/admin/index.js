import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "../../project/contexts/auth-context";
import AppButton from "../../project/controls/app-button/AppButton";
import { auth } from "../../project/firebase/firebase-config";

const Index = () => {
  const router = useRouter();
  const { userInfo } = useAuth();

  useEffect(() => {
    if (!userInfo) router.push("/dang-nhap");
  }, [router, userInfo]);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <div>
      <AppButton onClick={handleSignOut}>Đăng xuất</AppButton>
    </div>
  );
};

export default Index;

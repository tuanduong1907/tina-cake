import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "../../project/contexts/auth-context";

const Index = () => {
  const router = useRouter();
  const { userInfo } = useAuth();
  useEffect(() => {
    if (!userInfo) router.push("/dang-nhap");
  }, [router, userInfo]);
  return <div>Admin</div>;
};

export default Index;

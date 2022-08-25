import React, { Suspense } from "react";
import AppLoad from "../../project/app-utils/AppLoad";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<AppLoad />}>Welcome to Admin</Suspense>
    </div>
  );
}

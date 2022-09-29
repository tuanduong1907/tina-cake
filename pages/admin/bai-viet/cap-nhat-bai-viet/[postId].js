/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import HeadSeo from "../../../../project/components/SEO";
import AdminUpdatePostForm from "../../../../project/layouts/admin/adminUpdatePostPage/AdminUpdatePostForm";
import AdminLayoutTemplate from "../../../../project/templates/AdminLayoutTemplate";

function postUpdateId() {
  const route = useRouter();
  const postId = route.query.postId;
  return (
    <>
      <HeadSeo title="Cập nhật viết mới | Tina Cake" />
      <AdminLayoutTemplate heading={`Chỉnh sửa bài viết: ${postId}`}>
        <AdminUpdatePostForm postId={postId} />
      </AdminLayoutTemplate>
    </>
  );
}

export default postUpdateId;

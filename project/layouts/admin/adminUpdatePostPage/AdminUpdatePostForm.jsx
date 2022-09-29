import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import useFirebaseImage from "../../../../shared/hooks/useFirebaseImage";
import { text20 } from "../../../../shared/utils/mixin-styled";
import ImageUpload from "../../../components/imageUpload/ImageUpload";
import AppButtonAdmin from "../../../controls/app-button-admin/AppButtonAdmin";
import AppField from "../../../controls/app-field/AppField";
import AppInput from "../../../controls/app-input/AppInput";
import AppLabel from "../../../controls/app-label/AppLabel";
import AppSelect from "../../../controls/app-select/AppSelect";
import AppToggle from "../../../controls/app-toggle/AppToggle";
import { db } from "../../../firebase/firebase-config";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import toast from "react-hot-toast";
import slugify from "slugify";
const ReactQuill = dynamic(import("react-quill"), { ssr: false });

const AdminUpdatePostFormStyles = styled.div`
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  .label {
    ${text20}
    font-weight: 500;
  }
  .input-item-wrap {
    display: flex;
    gap: 40px;
    margin-bottom: 40px;
  }
  .input-item {
    flex: 1;
  }
  .add-btn {
    display: inline-block;
    width: auto;
    min-width: 200px;
    display: flex;
    margin-inline: auto;
  }
  .feature-field {
    flex-direction: row;
    align-items: center;
    gap: 20px;
    margin-bottom: 16px;
  }
  .content-post {
    margin-bottom: 40px;
  }
`;

const AdminUpdatePostForm = ({ postId }) => {
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const { control, watch, setValue, handleSubmit, getValues, reset, isValid } =
    useForm({
      mode: "onChange",
    });

  const watchHot = watch("hot");
  const watchBanner = watch("banner");

  //   hadnle Update Image
  const imageUrl = getValues("image");
  const imageRegex = /%2F(\S+)\?/gm.exec(imageUrl);
  const image_name = getValues("image_name");
  const deleteImagePost = async () => {
    const colRef = doc(db, "posts", postId);
    await updateDoc(colRef, {
      image: "",
    });
  };
  const {
    image,
    progress,
    handleSelectImage,
    handleDeleteImage,
    setImage,
    setProgress,
  } = useFirebaseImage(setValue, getValues, image_name, deleteImagePost);

  useEffect(() => {
    setImage(imageUrl);
  }, [imageUrl, setImage]);

  //   end hadnle Update Image

  useEffect(() => {
    async function getData() {
      const colRef = collection(db, "categories");
      const q = query(colRef);
      const querySnapshot = await getDocs(q);
      let result = [];
      querySnapshot.forEach((doc) => {
        result.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setCategories(result);
    }
    getData();
  }, []);

  const handleCategoryInputChange = (newValue) => {
    setValue("categoryId", newValue.id, true);
  };

  useEffect(() => {
    async function fetchData() {
      if (!postId) return null;
      const docRef = doc(db, "posts", postId);
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.data()) {
        reset(docSnapshot.data());
      }
      console.log("docSnapshot", docSnapshot.data());
    }
    fetchData();
  }, [postId, reset]);
  if (!postId) return null;

  //   Handle Update Post
  const handleUpdatePost = async (values) => {
    const cloneValues = { ...values };
    cloneValues.slug = slugify(values.slug || values.title, { lower: true });
    const docRef = doc(db, "posts", postId);
    await updateDoc(docRef, {
      content,
      ...cloneValues,
      image,
      createAt: serverTimestamp(),
    });
    toast.success("Cập nhật thành công");
  };
  //   end Handle Update Post
  return (
    <AdminUpdatePostFormStyles className="container-admin">
      <form onSubmit={handleSubmit(handleUpdatePost)}>
        <div className="input-item-wrap">
          <AppField className="input-item feature-field">
            <AppLabel className="label" htmlFor="feature_post">
              Nổi bật
            </AppLabel>
            <AppToggle
              on={watchHot === true}
              onClick={() => setValue("hot", !watchHot)}
            ></AppToggle>
          </AppField>
          <AppField className="input-item feature-field">
            <AppLabel className="label" htmlFor="feature_post">
              Thêm vào Banner
            </AppLabel>
            <AppToggle
              on={watchBanner === true}
              onClick={() => setValue("banner", !watchBanner)}
            ></AppToggle>
          </AppField>
        </div>
        <div className="input-item-wrap">
          <AppField className="input-item">
            <AppLabel className="label" htmlFor="title">
              Tiêu đề bài viết
            </AppLabel>
            <AppInput
              control={control}
              placeholder="Nhập tiêu đề bài viết"
              name="title"
              required
            ></AppInput>
          </AppField>
          <AppField className="input-item">
            <AppLabel className="label" htmlFor="slug">
              Đường dẫn bài viết
            </AppLabel>
            <AppInput
              control={control}
              placeholder="Nhập đường dẫn bài viết"
              name="slug"
            ></AppInput>
          </AppField>
        </div>
        <div className="input-item-wrap">
          <AppField className="input-item">
            <AppLabel className="label" htmlFor="image_post">
              Hình ảnh
            </AppLabel>
            <ImageUpload
              onChange={handleSelectImage}
              handleDeleteImage={handleDeleteImage}
              className=""
              progress={progress}
              image={image}
            ></ImageUpload>
          </AppField>
          <AppField className="input-item">
            <AppLabel className="label" htmlFor="image_post">
              Danh mục
            </AppLabel>
            <AppSelect
              name="category"
              options={categories}
              placeholder="Danh mục bài viết"
              onChange={handleCategoryInputChange}
            ></AppSelect>
          </AppField>
        </div>
        <div className="content-post">
          <AppField>
            <AppLabel className="label" htmlFor="content_post">
              Nội dung
            </AppLabel>
            <div className="entry-content">
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                placeholder="Viết nội dung"
              />
            </div>
          </AppField>
        </div>
        <AppButtonAdmin
          className="add-btn"
          type="submit"
          isLoading={loading}
          disabled={loading}
        >
          Cập nhật
        </AppButtonAdmin>
      </form>
    </AdminUpdatePostFormStyles>
  );
};

export default AdminUpdatePostForm;

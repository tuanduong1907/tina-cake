import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { text20 } from "../../../../shared/utils/mixin-styled";
import ImageUpload from "../../../components/imageUpload/ImageUpload";
import AppButtonAdmin from "../../../controls/app-button-admin/AppButtonAdmin";
import AppField from "../../../controls/app-field/AppField";
import AppInput from "../../../controls/app-input/AppInput";
import AppLabel from "../../../controls/app-label/AppLabel";
import AppSelect from "../../../controls/app-select/AppSelect";
import slugify from "slugify";
import {
  collection,
  query,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import useFirebaseImage from "../../../../shared/hooks/useFirebaseImage";
import AppToggle from "../../../controls/app-toggle/AppToggle";
import { db } from "../../../firebase/firebase-config";
import toast from "react-hot-toast";

const AdminAddNewPostFormStyles = styled.div`
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
`;

const AdminAddNewPostForm = () => {
  const [categories, setCategories] = useState([]);
  const { control, watch, setValue, handleSubmit, getValues, reset, isValid } =
    useForm({
      mode: "onChange",
      defaultValues: {
        title: "",
        slug: "",
        categoryId: "",
        hot: false,
        banner: false,
      },
    });

  const watchHot = watch("hot");
  const watchBanner = watch("banner");

  const {
    image,
    progress,
    handleSelectImage,
    handleDeleteImage,
    setImage,
    setProgress,
  } = useFirebaseImage(setValue, getValues);

  const [loading, setLoading] = useState(false);

  const handleAddNewPost = async (values) => {
    setLoading(true);
    try {
      const cloneValues = { ...values };
      cloneValues.slug = slugify(values.slug || values.title, { lower: true });
      const colRef = collection(db, "posts");
      await addDoc(colRef, {
        ...cloneValues,
        image,
        createAt: serverTimestamp(),
      });
      toast.success("Tạo bài viết thành công!");
      reset({
        title: "",
        slug: "",
        categoryId: "",
        hot: false,
        banner: false,
      });
      await setImage("");
      await setProgress(0);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

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
    return setValue("categoryId", newValue.id, true);
  };

  return (
    <AdminAddNewPostFormStyles className="container-admin">
      <form onSubmit={handleSubmit(handleAddNewPost)} autoComplete="off">
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
        <AppButtonAdmin
          className="add-btn"
          type="submit"
          isLoading={loading}
          disabled={loading}
        >
          Đăng bài
        </AppButtonAdmin>
      </form>
    </AdminAddNewPostFormStyles>
  );
};

export default AdminAddNewPostForm;

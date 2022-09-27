import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { text20 } from "../../../../shared/utils/mixin-styled";
import ImageUpload from "../../../components/imageUpload/ImageUpload";
import AppButtonAdmin from "../../../controls/app-button-admin/AppButtonAdmin";
import AppField from "../../../controls/app-field/AppField";
import AppInput from "../../../controls/app-input/AppInput";
import AppLabel from "../../../controls/app-label/AppLabel";
import AppSelect from "../../../controls/app-select/AppSelect";
import toast from "react-hot-toast";
import slugify from "slugify";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import useFirebaseImage from "../../../../shared/hooks/useFirebaseImage";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

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
  .infput-item {
    flex: 1;
  }
  .add-btn {
    display: inline-block;
    width: auto;
    min-width: 200px;
    display: flex;
    margin-inline: auto;
  }
`;

const AdminAddNewPostForm = () => {
  const { control, watch, setValue, handleSubmit, getValues } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      slug: "",
      category: "",
    },
  });

  const handleAddNewPost = (values) => {
    const clonedValues = { ...values };
    clonedValues.slug = slugify(values.slug || values.title);
    handleUploadImage(clonedValues.image);
  };

  const { image, progress, handleSelectImage, handleDeleteImage } =
    useFirebaseImage(setValue, getValues);

  return (
    <AdminAddNewPostFormStyles className="container-admin">
      <form onSubmit={handleSubmit(handleAddNewPost)}>
        <div className="input-item-wrap">
          <AppField className="infput-item">
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
          <AppField className="infput-item">
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
          <AppField className="infput-item">
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
          <AppField className="infput-item">
            <AppLabel className="label" htmlFor="image_post">
              Danh mục
            </AppLabel>
            <AppSelect
              control={control}
              name="category"
              options={options}
              placeholder="Danh mục bài viết"
            ></AppSelect>
          </AppField>
        </div>
        <AppButtonAdmin className="add-btn" type="submit">
          Đăng bài
        </AppButtonAdmin>
      </form>
    </AdminAddNewPostFormStyles>
  );
};

export default AdminAddNewPostForm;

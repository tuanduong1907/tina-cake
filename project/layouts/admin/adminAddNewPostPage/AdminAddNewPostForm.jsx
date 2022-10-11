import React, { useEffect, useRef, useState } from "react";
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
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(import("react-quill"), { ssr: false });
const { Quill } = dynamic(import("react-quill"), { ssr: false });
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    title: yup.string().required("Vui lòng nhập tiêu đề bài viết !!!"),
    categoryId: yup.string().required("Vui lòng chọn danh mục bài viết !!!"),
    title: yup.string().required("Vui lòng nhập tiêu đề bài viết !!!"),
    image_name: yup.string().required("Vui lòng chọn hình ảnh"),
  })
  .required();

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
    &-2 {
      display: flex;
      flex-direction: column;
      flex: 1;
      gap: 40px;
    }
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
    margin-top: 32px;
  }
  .feature-field {
    flex-direction: row;
    align-items: center;
    gap: 20px;
    margin-bottom: 16px;
  }
  /* Mobie: width < 740px */
  @media only screen and (max-width: 739px) {
    & {
      margin-inline: 0;
      margin-top: 72px;
      padding-top: 32px;
      padding-bottom: 100px;
    }
    .input-item-wrap {
      flex-direction: column;
    }
    .input-item-wrap-2 {
      gap: 20px;
    }
    .input-item-wrap {
      margin-bottom: 20px;
      gap: 20px;
    }
  }
`;

const AdminAddNewPostForm = () => {
  const [content, setContent] = useState("");
  const contentRef = useRef();
  const [activeContentToolbar, setActiveContentToolbar] = useState(false);
  const [categories, setCategories] = useState([]);
  const {
    control,
    watch,
    setValue,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      slug: "",
      categoryId: "",
      hot: false,
      banner: false,
    },
    resolver: yupResolver(schema),
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

  const modules = {
    toolbar: {
      container: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }, { font: [] }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link"],
        ["clean"],
      ],
    },
  };

  useEffect(() => {
    const handleScrollContent = () => {
      if (contentRef.current) {
        const elDistanceToTop =
          window.pageYOffset + contentRef.current.getBoundingClientRect().top;
        if (window.scrollY >= elDistanceToTop) {
          setActiveContentToolbar(true);
        } else {
          setActiveContentToolbar(false);
        }
      }
    };
    window.addEventListener("scroll", handleScrollContent);
  }, []);

  const handleAddNewPost = async (values) => {
    console.log("values", values);
    setLoading(true);
    try {
      const cloneValues = { ...values };
      cloneValues.slug = slugify(values.slug || values.title, { lower: true });
      const colRef = collection(db, "posts");
      await addDoc(colRef, {
        ...cloneValues,
        content,
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
        content: "",
      });
      setContent("");
      await setImage("");
      await setProgress(0);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message);
    }
  }, [errors]);

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
              Tiêu đề bài viết{" "}
              <span style={{ color: "rgb(244 63 94)" }}>*</span>
            </AppLabel>
            <AppInput
              control={control}
              placeholder="Nhập tiêu đề bài viết"
              name="title"
              className={errors.title ? "error-input" : ""}
            ></AppInput>
          </AppField>
          <AppField className="input-item">
            <AppLabel className="label" htmlFor="desc">
              Mô tả
            </AppLabel>
            <AppInput
              control={control}
              placeholder="Nhập mô tả bài viết"
              name="desc"
            ></AppInput>
          </AppField>
        </div>
        <div className="input-item-wrap">
          <AppField className="input-item">
            <AppLabel className="label" htmlFor="image_post">
              Hình ảnh <span style={{ color: "rgb(244 63 94)" }}>*</span>
            </AppLabel>
            <ImageUpload
              onChange={handleSelectImage}
              handleDeleteImage={handleDeleteImage}
              progress={progress}
              className={errors.image_name ? "error-input" : ""}
              image={image}
            ></ImageUpload>
          </AppField>
          <div className="input-item-wrap-2">
            <AppField>
              <AppLabel className="label" htmlFor="slug">
                Đường dẫn bài viết
              </AppLabel>
              <AppInput
                control={control}
                placeholder="Nhập đường dẫn bài viết"
                name="slug"
              ></AppInput>
            </AppField>
            <AppField>
              <AppLabel className="label" htmlFor="image_post">
                Danh mục <span style={{ color: "rgb(244 63 94)" }}>*</span>
              </AppLabel>
              <AppSelect
                name="category"
                options={categories}
                placeholder="Danh mục bài viết"
                className={errors.categoryId ? "error-input" : ""}
                onChange={handleCategoryInputChange}
              ></AppSelect>
            </AppField>
          </div>
        </div>
        <div className="content-post">
          <AppField>
            <AppLabel className="label" htmlFor="content_post">
              Nội dung
            </AppLabel>
            <div
              className={`entry-content ${
                activeContentToolbar ? "active" : ""
              }`}
              ref={contentRef}
            >
              <ReactQuill
                theme="snow"
                modules={modules}
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
          Đăng bài
        </AppButtonAdmin>
      </form>
    </AdminAddNewPostFormStyles>
  );
};

export default AdminAddNewPostForm;

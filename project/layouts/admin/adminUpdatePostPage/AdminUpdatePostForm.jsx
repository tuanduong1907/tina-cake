import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
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
import toast from "react-hot-toast";
import slugify from "slugify";
import "react-quill/dist/quill.snow.css";
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

  .add-btn-wrap {
    position: fixed;
    z-index: 20;
    top: 16px;
    right: 254px;
  }

  .add-btn {
    height: 40px;
    border-radius: 8px;
    width: auto;
    min-width: 100px;
    display: flex;
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
  /* Mobie: width < 740px */
  @media only screen and (max-width: 739px) {
    & {
      margin-inline: 0;
      margin-top: 72px;
      padding-top: 32px;
      padding-bottom: 70px;
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
    .add-btn-wrap {
      left: 0px;
      bottom: 0px;
      width: 100%;
      top: auto;
      padding: 16px 32px;
      background-color: rgb(255, 255, 255);
      border-top: 1px solid rgb(230, 232, 236);
      z-index: 3;
    }
    .add-btn {
      width: 100%;
      height: 48px;
    }
  }
  /* Tablet: width >= 740px and width < 1024px */
  @media only screen and (min-width: 740px) and (max-width: 1023px) {
    .add-btn {
      right: 220px;
    }
  }
`;

const AdminUpdatePostForm = ({ postId }) => {
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState([]);
  const contentRef = useRef();
  const [activeContentToolbar, setActiveContentToolbar] = useState(false);
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
        setContent(docSnapshot.data()?.content || "");
      }
    }
    fetchData();
  }, [postId, reset]);

  //   Handle Update Post
  const handleUpdatePost = async (values) => {
    const cloneValues = { ...values };
    cloneValues.slug = slugify(values.slug || values.title, { lower: true });
    const docRef = doc(db, "posts", postId);
    await updateDoc(docRef, {
      ...cloneValues,
      content,
      image,
      createAt: serverTimestamp(),
    });
    toast.success("Cập nhật thành công");
  };
  //   end Handle Update Post

  const modules = {
    toolbar: {
      container: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }, { font: [] }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "video"],
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
  }, [postId]);

  if (!postId) return null;
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
            <AppLabel className="label" htmlFor="desc">
              Mô tả
            </AppLabel>
            <AppInput
              control={control}
              placeholder="Nhập mô tả bài viết"
              name="desc"
              required
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
        <div className="add-btn-wrap">
          <AppButtonAdmin
            className="add-btn"
            type="submit"
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            Cập nhật
          </AppButtonAdmin>
        </div>
      </form>
    </AdminUpdatePostFormStyles>
  );
};

export default AdminUpdatePostForm;

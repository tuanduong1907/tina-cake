/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from "react";
import styled from "styled-components";
const ImageUploadStyles = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed ${(props) => props.theme.lightGrayColor2};
  width: 100%;
  min-height: 250px;
  border-radius: 12px;
  position: relative;
  overflow: hidden;
  &:hover {
    .delete-btn {
      opacity: 1;
      visibility: visible;
    }
  }
  .loading-progress {
    position: absolute;
    z-index: 10;
    width: 45px;
    height: 45px;
    border: 5px solid #22c55e;
    border-radius: 100rem;
    border-top-color: transparent;
    animation: spin 1s linear infinite;
  }
  .image {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    pointer-events: none;
    img {
      max-width: 80px;
      margin-bottom: 20px;
    }
  }
  .image-text {
    font-weight: 600;
  }
  .image-preview {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .delete-btn {
    position: absolute;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    visibility: hidden;
    width: 64px;
    height: 64px;
    color: #ef4444;
    transition: all linear 0.2s;
    background-color: #ffff;
    border-radius: 100rem;
    opacity: 0;
    cursor: pointer;
    border: none;
  }
  .delete-icon {
    width: 36px;
    height: 36px;
  }
  .image-upload-progress {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 4px;
    transition: linear 0.2s;
    background-color: #4ade80;
  }
`;

const ImageUpload = (props) => {
  const {
    name,
    className = "",
    progress = 0,
    image = "",
    handleDeleteImage = () => {},
    ...rest
  } = props;
  return (
    <ImageUploadStyles className={` ${className} group`}>
      <input
        type="file"
        name={name}
        className="hidden-input"
        onChange={() => {}}
        {...rest}
      />
      {progress !== 0 && !image && <div className="loading-progress"></div>}
      {!image && progress === 0 && (
        <div className="image">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/backend-tina-cake.appspot.com/o/img-upload.png?alt=media&token=38a3f9f1-5401-4038-abc9-a6726ec2e41d"
            alt="upload-img"
            className="max-w-[80px] mb-5"
          />
          <p className="image-text">Thêm hình ảnh</p>
        </div>
      )}
      {image && (
        <Fragment>
          <img src={image} className="image-preview" alt="" />
          <button
            type="button"
            className="delete-btn"
            onClick={handleDeleteImage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="delete-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </Fragment>
      )}
      {!image && (
        <div
          className=" image-upload-progress"
          style={{
            width: `${Math.ceil(progress)}%`,
          }}
        ></div>
      )}
    </ImageUploadStyles>
  );
};

export default ImageUpload;

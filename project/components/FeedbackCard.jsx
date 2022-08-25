/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import { text16, text18, text20 } from "../../shared/utils/mixin-styled";
import SvgCommentIcon from "../icons/CommentIcon";

const FeedbackCardStyles = styled.div`
  padding: 16px;
  background: linear-gradient(
    146.73deg,
    rgba(255, 255, 255, 0.08) 3.5%,
    rgba(255, 255, 255, 0.01) 98.73%
  );
  backdrop-filter: blur(50px);
  border-radius: 16px;
  .feedback-icon {
    margin-top: 12px;
    margin-bottom: 16px;
  }
  .feedback-content {
    color: #ffff;
    ${text18}
    padding-bottom: 20px;
    margin-bottom: 16px;
    border-bottom: 1px solid ${(props) => props.theme.grayColor};
  }
  .feedback-footer {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .feedback-avatar {
    width: 64px;
    height: 64px;
    border-radius: 100rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 100rem;
    }
  }
  .feedback-username {
    ${text20}
    color: #fff;
    font-weight: 600;
  }

  /* Responsive */
  /* Mobie: width < 740px */
  @media only screen and (max-width: 739px) {
    .feedback-content {
      ${text16}
    }
  }
`;

const FeedbackCard = ({ content, image, username }) => {
  return (
    <FeedbackCardStyles>
      <SvgCommentIcon className="feedback-icon"></SvgCommentIcon>
      <p className="feedback-content">{content}</p>
      <div className="feedback-footer">
        <div className="feedback-avatar">
          <img src={image} alt="" />
        </div>
        <div className="feedback-username">{username}</div>
      </div>
    </FeedbackCardStyles>
  );
};

export default FeedbackCard;

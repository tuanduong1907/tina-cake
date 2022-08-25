import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { dataHeader } from "../../../data/headerData";
import { text16 } from "../../../shared/utils/mixin-styled";
import AppButton from "../../controls/app-button/AppButton";

const HeaderStyles = styled.header`
  height: 72px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(16px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  .header-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-list {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    ${text16}
    display: flex;
    gap: 32px;
  }
`;

export const Header = () => {
  return (
    <HeaderStyles>
      <div className="container header-wrap">
        <div className="header-logo">
          <svg
            width="108"
            height="18"
            viewBox="0 0 108 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.8261 13.2308C8.68517 13.1478 8.58307 13.2667 8.47598 13.3133C7.69142 13.656 6.89243 13.9157 6.02686 13.9685C3.18434 14.1401 0.516053 11.9844 0.0760536 9.13936C-0.352294 6.37002 1.06203 3.82226 3.62379 2.7475C5.27004 2.05643 6.91518 1.36424 8.56199 0.674286C8.85107 0.553124 8.85384 0.557612 8.85218 0.879028C8.84607 2.07438 8.83553 3.26973 8.8372 4.46509C8.8372 4.66141 8.77616 4.75733 8.59029 4.83362C7.40068 5.32164 6.21718 5.82367 5.03201 6.32234C4.15589 6.69088 3.65264 7.63213 3.83796 8.5515C4.02661 9.4877 4.85945 10.1429 5.83044 10.1176C6.06348 10.1115 6.28764 10.0582 6.50292 9.9673C7.17652 9.68403 7.84956 9.39964 8.52315 9.1158C8.81167 8.99408 8.82166 8.99801 8.81999 9.29586C8.81223 10.5939 8.80168 11.8913 8.79392 13.1893C8.79392 13.205 8.81223 13.2207 8.82221 13.2364L8.82721 13.2314L8.8261 13.2308Z"
              fill="white"
            />
            <path
              d="M8.82067 13.2359C9.25012 13.1214 9.64462 12.9167 10.053 12.749C10.908 12.399 11.7547 12.0271 12.6103 11.6776C13.6035 11.272 14.0751 10.093 13.6978 9.12478C13.3044 8.11454 12.1637 7.61643 11.1511 8.0231C10.4475 8.30582 9.7506 8.60479 9.05537 8.90826C8.85618 8.9952 8.81179 8.95538 8.81345 8.73998C8.82455 7.50704 8.82344 6.27355 8.82455 5.04061C8.82455 4.92562 8.82455 4.83306 8.95772 4.77136C10.1629 4.20874 11.4085 3.85704 12.7457 4.10273C14.9357 4.50604 16.4943 5.73393 17.2772 7.85538C18.4108 10.9282 16.7534 14.1547 14.0069 15.2575C12.3506 15.9222 10.7138 16.6357 9.06758 17.3262C8.7846 17.4446 8.78294 17.4418 8.78405 17.1215C8.78904 15.9166 8.79459 14.7117 8.8018 13.5068C8.8018 13.4143 8.81678 13.3223 8.82511 13.2297L8.82011 13.2348L8.82067 13.2359Z"
              fill="white"
            />
            <path
              d="M33.5647 8.46094V13.3477C33.3831 13.5879 33.0989 13.8516 32.7122 14.1387C32.3313 14.4199 31.8245 14.6631 31.1917 14.8682C30.5588 15.0732 29.7708 15.1758 28.8274 15.1758C28.0247 15.1758 27.2893 15.041 26.6213 14.7715C25.9534 14.4961 25.3762 14.0947 24.8899 13.5674C24.4094 13.04 24.0374 12.3984 23.7737 11.6426C23.51 10.8809 23.3782 10.0137 23.3782 9.04102V8.15332C23.3782 7.18652 23.4983 6.3252 23.7385 5.56934C23.9846 4.80762 24.3362 4.16309 24.7932 3.63574C25.2502 3.1084 25.801 2.70996 26.4456 2.44043C27.0959 2.16504 27.8313 2.02734 28.6516 2.02734C29.7004 2.02734 30.5676 2.20312 31.2532 2.55469C31.9446 2.90039 32.4778 3.38086 32.8528 3.99609C33.2278 4.61133 33.4651 5.31445 33.5647 6.10547H31.4026C31.3323 5.66016 31.1946 5.26172 30.9895 4.91016C30.7903 4.55859 30.5032 4.2832 30.1282 4.08398C29.759 3.87891 29.2786 3.77637 28.6868 3.77637C28.177 3.77637 27.7288 3.87305 27.342 4.06641C26.9553 4.25977 26.6331 4.54395 26.3752 4.91895C26.1233 5.29395 25.9329 5.75098 25.804 6.29004C25.675 6.8291 25.6106 7.44434 25.6106 8.13574V9.04102C25.6106 9.74414 25.6838 10.3682 25.8303 10.9131C25.9827 11.458 26.1995 11.918 26.4807 12.293C26.7678 12.668 27.1165 12.9521 27.5266 13.1455C27.9368 13.333 28.3997 13.4268 28.9153 13.4268C29.4192 13.4268 29.8323 13.3857 30.1545 13.3037C30.4768 13.2158 30.7317 13.1133 30.9192 12.9961C31.1125 12.873 31.262 12.7559 31.3674 12.6445V10.1045H28.7043V8.46094H33.5647ZM39.9895 15.1758C39.2864 15.1758 38.6506 15.0615 38.0823 14.833C37.5198 14.5986 37.0393 14.2734 36.6409 13.8574C36.2483 13.4414 35.9465 12.9521 35.7356 12.3896C35.5247 11.8271 35.4192 11.2207 35.4192 10.5703V10.2188C35.4192 9.47461 35.5276 8.80078 35.7444 8.19727C35.9612 7.59375 36.2629 7.07812 36.6497 6.65039C37.0364 6.2168 37.4934 5.88574 38.0208 5.65723C38.5481 5.42871 39.1194 5.31445 39.7346 5.31445C40.4143 5.31445 41.009 5.42871 41.5188 5.65723C42.0286 5.88574 42.4504 6.20801 42.7844 6.62402C43.1243 7.03418 43.3762 7.52344 43.5403 8.0918C43.7102 8.66016 43.7952 9.28711 43.7952 9.97266V10.8779H36.4475V9.35742H41.7034V9.19043C41.6917 8.80957 41.6155 8.45215 41.4749 8.11816C41.3401 7.78418 41.1321 7.51465 40.8508 7.30957C40.5696 7.10449 40.1946 7.00195 39.7258 7.00195C39.3743 7.00195 39.0608 7.07812 38.7854 7.23047C38.5159 7.37695 38.2903 7.59082 38.1086 7.87207C37.927 8.15332 37.7864 8.49316 37.6868 8.8916C37.593 9.28418 37.5461 9.72656 37.5461 10.2188V10.5703C37.5461 10.9863 37.6018 11.373 37.7131 11.7305C37.8303 12.082 38.0002 12.3896 38.2229 12.6533C38.4456 12.917 38.7151 13.125 39.0315 13.2773C39.3479 13.4238 39.7083 13.4971 40.1125 13.4971C40.6223 13.4971 41.0764 13.3945 41.4749 13.1895C41.8733 12.9844 42.219 12.6943 42.512 12.3193L43.6282 13.4004C43.4231 13.6992 43.1565 13.9863 42.8284 14.2617C42.5002 14.5312 42.0989 14.751 41.6243 14.9209C41.1555 15.0908 40.6106 15.1758 39.9895 15.1758ZM47.5481 7.52051V15H45.4299V5.49023H47.425L47.5481 7.52051ZM47.1702 9.89355L46.4846 9.88477C46.4905 9.21094 46.5842 8.59277 46.7659 8.03027C46.9534 7.46777 47.2112 6.98438 47.5393 6.58008C47.8733 6.17578 48.2717 5.86523 48.7346 5.64844C49.1975 5.42578 49.7131 5.31445 50.2815 5.31445C50.7385 5.31445 51.1516 5.37891 51.5208 5.50781C51.8958 5.63086 52.2151 5.83301 52.4788 6.11426C52.7483 6.39551 52.9534 6.76172 53.094 7.21289C53.2346 7.6582 53.3049 8.20605 53.3049 8.85645V15H51.178V8.84766C51.178 8.39062 51.1106 8.03027 50.9758 7.7666C50.8469 7.49707 50.6565 7.30664 50.4045 7.19531C50.1584 7.07812 49.8508 7.01953 49.4817 7.01953C49.1184 7.01953 48.7932 7.0957 48.5061 7.24805C48.219 7.40039 47.9758 7.6084 47.7766 7.87207C47.5833 8.13574 47.4338 8.44043 47.3284 8.78613C47.2229 9.13184 47.1702 9.50098 47.1702 9.89355ZM64.6252 13.251V15H55.7395V13.251H64.6252ZM64.4231 3.56543L56.5569 15H55.0803V13.6025L62.9729 2.20312H64.4231V3.56543ZM63.6057 2.20312V3.96094H55.1331V2.20312H63.6057ZM75.8665 2.20312V15H73.678V2.20312H75.8665ZM79.8831 2.20312V3.96094H69.6965V2.20312H79.8831ZM84.7083 15.1758C84.0051 15.1758 83.3694 15.0615 82.801 14.833C82.2385 14.5986 81.7581 14.2734 81.3596 13.8574C80.967 13.4414 80.6653 12.9521 80.4543 12.3896C80.2434 11.8271 80.1379 11.2207 80.1379 10.5703V10.2188C80.1379 9.47461 80.2463 8.80078 80.4631 8.19727C80.6799 7.59375 80.9817 7.07812 81.3684 6.65039C81.7551 6.2168 82.2122 5.88574 82.7395 5.65723C83.2668 5.42871 83.8381 5.31445 84.4534 5.31445C85.1331 5.31445 85.7278 5.42871 86.2375 5.65723C86.7473 5.88574 87.1692 6.20801 87.5032 6.62402C87.843 7.03418 88.095 7.52344 88.259 8.0918C88.429 8.66016 88.5139 9.28711 88.5139 9.97266V10.8779H81.1663V9.35742H86.4221V9.19043C86.4104 8.80957 86.3342 8.45215 86.1936 8.11816C86.0588 7.78418 85.8508 7.51465 85.5696 7.30957C85.2883 7.10449 84.9133 7.00195 84.4446 7.00195C84.093 7.00195 83.7795 7.07812 83.5042 7.23047C83.2346 7.37695 83.009 7.59082 82.8274 7.87207C82.6458 8.15332 82.5051 8.49316 82.4055 8.8916C82.3118 9.28418 82.2649 9.72656 82.2649 10.2188V10.5703C82.2649 10.9863 82.3206 11.373 82.4319 11.7305C82.5491 12.082 82.719 12.3896 82.9417 12.6533C83.1643 12.917 83.4338 13.125 83.7502 13.2773C84.0667 13.4238 84.427 13.4971 84.8313 13.4971C85.3411 13.4971 85.7952 13.3945 86.1936 13.1895C86.592 12.9844 86.9377 12.6943 87.2307 12.3193L88.3469 13.4004C88.1418 13.6992 87.8752 13.9863 87.5471 14.2617C87.219 14.5312 86.8176 14.751 86.343 14.9209C85.8743 15.0908 85.3293 15.1758 84.7083 15.1758ZM94.051 13.4883C94.3967 13.4883 94.7073 13.4209 94.9827 13.2861C95.2639 13.1455 95.4895 12.9521 95.6594 12.7061C95.8352 12.46 95.9319 12.1758 95.9495 11.8535H97.9446C97.9329 12.4688 97.7512 13.0283 97.3997 13.5322C97.0481 14.0361 96.5823 14.4375 96.0022 14.7363C95.4221 15.0293 94.7805 15.1758 94.0774 15.1758C93.3508 15.1758 92.718 15.0527 92.179 14.8066C91.6399 14.5547 91.1917 14.209 90.8342 13.7695C90.4768 13.3301 90.2073 12.8232 90.0256 12.249C89.8499 11.6748 89.762 11.0596 89.762 10.4033V10.0957C89.762 9.43945 89.8499 8.82422 90.0256 8.25C90.2073 7.66992 90.4768 7.16016 90.8342 6.7207C91.1917 6.28125 91.6399 5.93848 92.179 5.69238C92.718 5.44043 93.3479 5.31445 94.0686 5.31445C94.8303 5.31445 95.4983 5.4668 96.0725 5.77148C96.6467 6.07031 97.0979 6.48926 97.426 7.02832C97.76 7.56152 97.9329 8.18262 97.9446 8.8916H95.9495C95.9319 8.54004 95.844 8.22363 95.6858 7.94238C95.5334 7.65527 95.3167 7.42676 95.0354 7.25684C94.76 7.08691 94.429 7.00195 94.0422 7.00195C93.6145 7.00195 93.26 7.08984 92.9788 7.26562C92.6975 7.43555 92.4778 7.66992 92.3196 7.96875C92.1614 8.26172 92.0471 8.59277 91.9768 8.96191C91.9124 9.3252 91.8801 9.70312 91.8801 10.0957V10.4033C91.8801 10.7959 91.9124 11.1768 91.9768 11.5459C92.0413 11.915 92.1526 12.2461 92.3108 12.5391C92.4749 12.8262 92.6975 13.0576 92.9788 13.2334C93.26 13.4033 93.6174 13.4883 94.051 13.4883ZM101.662 1.5V15H99.553V1.5H101.662ZM101.293 9.89355L100.608 9.88477C100.614 9.22852 100.704 8.62207 100.88 8.06543C101.062 7.50879 101.314 7.02539 101.636 6.61523C101.964 6.19922 102.357 5.87988 102.814 5.65723C103.271 5.42871 103.778 5.31445 104.334 5.31445C104.803 5.31445 105.225 5.37891 105.6 5.50781C105.981 5.63672 106.309 5.84473 106.584 6.13184C106.86 6.41309 107.068 6.78223 107.208 7.23926C107.355 7.69043 107.428 8.24121 107.428 8.8916V15H105.301V8.87402C105.301 8.41699 105.234 8.05371 105.099 7.78418C104.97 7.51465 104.78 7.32129 104.528 7.2041C104.276 7.08105 103.968 7.01953 103.605 7.01953C103.224 7.01953 102.887 7.0957 102.594 7.24805C102.307 7.40039 102.067 7.6084 101.873 7.87207C101.68 8.13574 101.533 8.44043 101.434 8.78613C101.34 9.13184 101.293 9.50098 101.293 9.89355Z"
              fill="white"
            />
          </svg>
        </div>
        {/* <ul className="nav-list">
          {dataHeader.length > 0 &&
            dataHeader.map((item) => (
              <li key={item.id}>
                <Link href={`/${item.link}`}>{item.title}</Link>
              </li>
            ))}
        </ul> */}
        <AppButton>
          Đặt bánh
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.17017 7.43994L12.0002 12.5499L20.7701 7.46991"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.0002 21.6099V12.5399"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.93011 2.48L4.59012 5.45003C3.38012 6.12003 2.39014 7.80001 2.39014 9.18001V14.83C2.39014 16.21 3.38012 17.89 4.59012 18.56L9.93011 21.53C11.0701 22.16 12.9401 22.16 14.0801 21.53L19.4201 18.56C20.6301 17.89 21.6201 16.21 21.6201 14.83V9.18001C21.6201 7.80001 20.6301 6.12003 19.4201 5.45003L14.0801 2.48C12.9301 1.84 11.0701 1.84 9.93011 2.48Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 13.24V9.58002L7.51001 4.09998"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </AppButton>
      </div>
    </HeaderStyles>
  );
};

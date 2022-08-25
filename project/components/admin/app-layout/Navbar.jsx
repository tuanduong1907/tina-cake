import styled from "styled-components";
import { ListNavbar } from "../../../../shared/utils/dataComponent.js";
import Link from "next/link.js";
import ActivateLink from "../../../app-utils/ActivateLink";
import * as mixins from "../../../../shared/utils/mixin-styled";

// Styles
const NavbarAdminStyles = styled.nav`
  height: ${(props) => props.theme.navbarAdmin};
  background: ${(props) => props.theme.grayColor};
  padding-inline: 35.5px;
  ul {
    height: 100%;
    ${mixins.flexBetween};
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 7px;
      i {
        height: 18px;
        display: flex;
        align-items: center;
        svg path {
          fill: #333333;
        }
        &.special {
          svg path {
            stroke: #333333;
            fill: unset;
          }
        }
      }
      h3 {
        ${mixins.text12}
      }
      &.active {
        i {
          svg path {
            fill: ${(props) => props.theme.primaryColor};
          }
          &.special {
            svg path {
              stroke: ${(props) => props.theme.primaryColor};
              fill: unset;
            }
          }
        }
        h3 {
          ${mixins.text12}
          color: ${(props) => props.theme.primaryColor};
        }
      }
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarAdminStyles className="fixedBottom">
      <ul>
        {ListNavbar.map((item) => (
          <ActivateLink
            activeClassName="active"
            key={item.id}
            href={item.pathname}
          >
            <li>
              <i className={item.name === "Bài viết" ? "special" : ""}>
                {item.icon}
              </i>
              <h3>{item.name}</h3>
            </li>
          </ActivateLink>
        ))}
      </ul>
    </NavbarAdminStyles>
  );
};

export default Navbar;

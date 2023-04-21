import React, { FC } from "react";
import { Link } from "react-router-dom";
import MyButton from "../../UI/Button/MyButton";
import { LinkFooter } from "../../../types/footerLinks";
import "./FooterLinks.scss";

interface FooterLinksProps {
  title: string;
  links: LinkFooter[];
}

const FooterLinks = ({ title, links }: FooterLinksProps) => {
  return (
    <div className="footerLinks">
      <span className="iviFooter__title">{title}</span>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <Link to={link.href}>
              <MyButton
                classes={"nbl-button__primaryText nbl-button__linkItem"}
                children={link.name}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;

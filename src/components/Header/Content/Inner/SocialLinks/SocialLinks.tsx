import React from "react";
import { SocialLink } from "./Inner/SocialLink";

import TelegramIcon from "@material-ui/icons/Telegram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";

import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core/SvgIcon";

export type IconType = OverridableComponent<SvgIconTypeMap<{}, "svg">>;

export const SocialLinks: React.FC = () => {
  const Icons: IconType[] = [TelegramIcon, WhatsAppIcon, InstagramIcon];
  const links: string[] = [
    "https://tlgg.ru/ramil_ashrafulin",
    "https://wa.me/+79775329220",
    "https://instagram.com/ashrafulin_?utm_medium=copy_link",
  ];

  return (
    <div className="header__social">
      <ul className="header__social-list">
        {Icons.map((Icon, index) => (
          <SocialLink key={index} href={links[index]} Icon={Icon} />
        ))}
      </ul>
    </div>
  );
};

import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, } from 'lucide-react';
import * as S from './styles';

export const Footer = () => {
  return (
    <S.Footer>
      <S.Container>
        <S.Grid>
          <S.Column>
            <S.Title>About ACH</S.Title>
            <S.List>
              <S.ListItem>
                <S.Link href="#about">Our Story</S.Link>
              </S.ListItem>
              <S.ListItem>
                <S.Link href="#team">Team</S.Link>
              </S.ListItem>
              <S.ListItem>
                <S.Link href="#careers">Careers</S.Link>
              </S.ListItem>
            </S.List>
          </S.Column>
          <S.Column>
            <S.Title>Services</S.Title>
            <S.List>
              <S.ListItem>
                <S.Link href="#consulting">Business Consulting</S.Link>
              </S.ListItem>
              <S.ListItem>
                <S.Link href="#analysis">Market Analysis</S.Link>
              </S.ListItem>
              <S.ListItem>
                <S.Link href="#risk">Risk Management</S.Link>
              </S.ListItem>
            </S.List>
          </S.Column>
          <S.Column>
            <S.Title>Connect</S.Title>
            <S.SocialLinks>
              <S.SocialLink href="https://www.facebook.com/profile.php?id=61567141359387&mibextid=ZbWKwL" aria-label="Facebook">
                <Facebook />
              </S.SocialLink>
              <S.SocialLink href="#" aria-label="Twitter">
                <Twitter />
              </S.SocialLink>
              <S.SocialLink href="https://www.linkedin.com/in/abdulhakeem-sulaimon-1bb704230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" aria-label="LinkedIn">
                <Linkedin />
              </S.SocialLink>
              <S.SocialLink href="https://www.instagram.com/akboy_creative_hub/profilecard/?igsh=MWowMmh4eXhuNzlzaQ" aria-label="Instagram">
                <Instagram />
              </S.SocialLink>
              <S.SocialLink href="https://youtube.com/@akboycreativehub?si=qt_XKGJTVqRE-sIN" aria-label="Youtube">
                <Youtube />
              </S.SocialLink>
            </S.SocialLinks>
          </S.Column>
        </S.Grid>
        <S.Copyright>
          © {new Date().getFullYear()} ACH. All rights reserved.
        </S.Copyright>
      </S.Container>
    </S.Footer>
  );
};
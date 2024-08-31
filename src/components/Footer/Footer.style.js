import styled from "styled-components";
import {Img} from "../UI/Img/index.jsx";
import {LinkRouter} from "../UI/LinkRouter/index.jsx";
import {Link} from "../UI/Link/index.jsx";

export const FooterSection = styled.footer`
  background: var(--grey-11);
  padding: 0 0 20px;
`;
export const FooterContent = styled.div`
    padding: 100px 0 0;
`;




export const StyledLogoFooter = styled(Img)`
  margin: 0 0 50px;
`;
export const NavbarFooter = styled.div`
  text-align: center;
 
`;
export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 26px;
`;
export const StyledLinksNav = styled(LinkRouter)`
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: var(--white-90);
`;




export const ContactsFooter = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 50px 0 ;
  margin: 50px 0 0;
  
  border-top: 1px solid var(--grey-15);
  border-bottom: 1px solid var(--grey-15);
`;
export const Contacts = styled.div`
  display: flex;
  gap: 6px;
  
`;
export const StyleImagesContact = styled(Img)`
  
`;
export const LinkContacts = styled.a`
    
`;



export const FooterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  margin: 50px 0 0;
  background: var(--grey-10);
  border: 1px solid var(--grey-15);
  border-radius: 100px;
  
`;
export const FooterInfoContent = styled.div`
  
`;
export const LinksFooter = styled.div`
  display: flex;
  gap: 14px;
`;
export const StyledLinksFooter = styled.a`
  padding: 14px;
  border-radius: 100px;
  background: var(--green-60);
`;
export const ImagesLinksFooter= styled(Img)`

`;
export const TextFooterInfo = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 150%;
  color: var(--grey-70);
`;
export const PrivacyFooter = styled.div`
  display: flex;
  gap: 12px;
  a:nth-of-type(1) {
    border-right: 1px solid var(--grey-70);
    padding: 0 12px 0;
  }
`;
export const PrivacyFooterLink = styled.a`
  
  
  font-weight: 300;
  font-size: 18px;
  line-height: 150%;
  color: var(--grey-70);
  
  
`;
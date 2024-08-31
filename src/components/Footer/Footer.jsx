import {LayoutWindow} from "../../theme/LayoutWindow.js";
import {
    Contacts,
    ContactsFooter,
    FooterContent, FooterInfo, FooterInfoContent,
    FooterSection, ImagesLinksFooter, LinkContacts, LinksFooter,
    NavbarFooter, PrivacyFooter, PrivacyFooterLink, StyledLinksFooter,
    StyledLinksNav,
    StyledLogoFooter,
    StyledNav, StyleImagesContact, TextFooterInfo
} from "./Footer.style.js";

import logoFooter from '../../assets/image/LogoFooter.png'
import mailIcon from '../../assets/image/Icon.png'
import callIcon from '../../assets/image/IconCall.png'
import facebookIcon from '../../assets/image/IconFacebook.png'
import linkedinIcon from '../../assets/image/IconLinkedIn.png'
import mapIcon from '../../assets/image/IconMap.png'
import twitterIcon from '../../assets/image/IconTwitter.png'

export function Footer() {
    return (
        <>
            <FooterSection>
                    <LayoutWindow>
                        <FooterContent>
                            <NavbarFooter>
                                <StyledLogoFooter src={logoFooter}/>
                                <StyledNav>
                                    <StyledLinksNav to={'/'}>
                                        Home
                                    </StyledLinksNav>

                                    <StyledLinksNav to={'/careers'}>
                                        Careers
                                    </StyledLinksNav>

                                    <StyledLinksNav to={'/about'}>
                                        About
                                    </StyledLinksNav>

                                    <StyledLinksNav to={'/security'}>
                                        Security
                                    </StyledLinksNav>
                                </StyledNav>
                            </NavbarFooter>

                            <ContactsFooter>
                                <Contacts>
                                    <StyleImagesContact src={mailIcon}/>
                                    <LinkContacts href="https://www.google.com/">
                                        hello@skillbirdge.com
                                    </LinkContacts>
                                </Contacts>
                                <Contacts>
                                    <StyleImagesContact src={callIcon}/>
                                    <LinkContacts href="https://www.google.com/">
                                        +91 91813 23 2309
                                    </LinkContacts>
                                </Contacts>
                                <Contacts>
                                    <StyleImagesContact src={mapIcon}/>
                                    <LinkContacts href="https://www.google.com/">
                                        Somewhere in the World
                                    </LinkContacts>
                                </Contacts>
                            </ContactsFooter>

                            <FooterInfo>
                                <FooterInfoContent>
                                    <LinksFooter>
                                        <StyledLinksFooter>
                                            <ImagesLinksFooter src={facebookIcon}/>
                                        </StyledLinksFooter>

                                        <StyledLinksFooter>
                                            <ImagesLinksFooter src={twitterIcon}/>
                                        </StyledLinksFooter>

                                        <StyledLinksFooter>
                                            <ImagesLinksFooter src={linkedinIcon}/>
                                        </StyledLinksFooter>
                                    </LinksFooter>
                                </FooterInfoContent>
                                <div>
                                    <TextFooterInfo>
                                        YourBank All Rights Reserved
                                    </TextFooterInfo>
                                </div>
                                <PrivacyFooter>
                                    <PrivacyFooterLink>
                                        Privacy Policy
                                    </PrivacyFooterLink>
                                    <PrivacyFooterLink>
                                        Terms of Service
                                    </PrivacyFooterLink>
                                </PrivacyFooter>
                            </FooterInfo>
                        </FooterContent>
                    </LayoutWindow>
            </FooterSection>
        </>
    )
}
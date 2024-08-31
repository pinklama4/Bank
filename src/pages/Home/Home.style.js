import styled from "styled-components";
import {NavbarLink} from "../../components/UI/NavbarLink/NavbarLink.jsx";
import {Img} from "../../components/UI/Img/index.jsx";


export const HeroSection = styled.section`
    padding: 0 10px;
`;
export const HeroContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const InfoHero = styled.div`
    
`;
export const CreditCheck = styled.div`
  display: flex;
  gap: 6px;
  margin: 0 0 20px;
  width: 100%;
  max-width: 400px;
  align-items: center;
  height: 44px;
  padding: 10px 20px;
  border-radius: 61px;
  background: var(--grey-15);
`;
export const SubtractImg = styled(Img)`
  
`;
export const TextSubtract = styled.p`
  
  font-weight: 300;
  font-size: 18px;
  line-height: 133%;
  color: var(--absolute-white);
`;
export const TitleHero = styled.h1`
  margin: 0 0 14px;
  max-width: 825px;
  width: 100%;
  
  font-weight: 500;
  font-size: 48px;
  line-height: 150%;
  color: var(--absolute-white);
  
  span {
    color: var(--green-60);
  }
`;
export const Title = styled.p`
  margin: 0 0 50px;
  max-width: 825px;
  width: 100%;
  
  font-weight: 300;
  font-size: 18px;
  line-height: 150%;
  color: var(--white-90);
`;
export const StyleLink = styled(NavbarLink)`
  display: block;
  max-width: 183px;
  width: 100%;
  border-radius: 82px;
  padding: 18px 30px;
  

  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: var(--grey-11);
  background: var(--green-60);
`;


export const ImagesHero = styled.div`

`;
export const MainImages = styled.img`

`;


export const AbstractImg = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  user-select: none;
`;
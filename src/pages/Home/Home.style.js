import styled from "styled-components";
import {NavbarLink} from "../../components/UI/NavbarLink/NavbarLink.jsx";
import {Img} from "../../components/UI/Img/index.jsx";
import {Button} from "../../components/UI/Button/index.jsx";


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



export const Products = styled.div`

`;
export const ProductsContent = styled.div`

`;
export const ProductsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;
export const StyledTitleProducts = styled.p`
  font-weight: 500;
  font-size: 48px;
  line-height: 150%;
  color: var(--absolute-white);
  
  span {
    color: var(--green-60);
  }
`;
export const StyledTextProducts = styled.p`
  margin: 14px 0 0;
  
  font-weight: 300;
  font-size: 18px;
  line-height: 150%;
  color: var(--grey-70);
`;
export const ButtonContainer = styled.div`
  display: flex;
  border: 1px solid var(--grey-15);
  border-radius: 82px;
  padding: 14px;
  width: 400px;
  height: 83px;
`;
export const StyledButtonIndividuals = styled(Button)`

  width: 181px;
  height: 55px;

  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: var(--absolute-white);
  
  &.active-individuals {
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    text-align: center;
    color: var(--grey-11);
    
    background: var(--green-60);
    border-radius: 140px;
    padding: 14px 24px;
  }
`;
export const StyledButtonBusinesses = styled(Button)`
  width: 181px;
  height: 55px;
  
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: var(--absolute-white);

  &.active-businesses {
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    text-align: center;
    color: var(--grey-11);

    background: var(--green-60);
    border-radius: 140px;
    padding: 14px 24px;
  }
`;

export const BoxProducts = styled.div`
    margin: 100px 0 0 ;
`;

export const ProductsForIndividuals = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const IndividualsCard = styled.div`
  text-align: center;
  padding: 0 50px;
  &:nth-child(2) {
   border-left: 1px solid var(--grey-15);
   border-right: 1px solid var(--grey-15);
 }
`;


export const ProductsForBusinesses = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const BusinessesCard = styled.div`
  text-align: center;
  padding: 0 50px;
  &:nth-child(2) {
    border-left: 1px solid var(--grey-15);
    border-right: 1px solid var(--grey-15);
  }
`;


export const StyleImagesProducts = styled(Img)`

`;

export const TitleProductsCard = styled.p`
  margin: 30px 0 0;
  
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  text-align: center;
  color: var(--absolute-white);
`;
export const TextProductsCard = styled.p`
  margin: 20px 0 0;
  
  font-weight: 300;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: var(--grey-70);
`;
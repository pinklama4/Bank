import {
    AbstractImg,
    CreditCheck,
    HeroContent,
    HeroSection, ImagesHero,
    InfoHero, MainImages,
    StyleLink,
    SubtractImg,
    TextSubtract,
    Title,
    TitleHero
} from "./Home.style.js";
import {LayoutWindow} from "../../theme/LayoutWindow.js";
import abstract from '../../assets/image/AbstractDesign.png'
import subtract from '../../assets/image/Subtract.png'
import mainImages from '../../assets/image/mainImg.png'



export function Home () {
    return(
        <>
            <LayoutWindow>
                <HeroSection>
                    <AbstractImg src={abstract}/>
                    <HeroContent>
                        <InfoHero>
                            <CreditCheck>
                                <SubtractImg src={subtract}/>
                                <TextSubtract>
                                    No LLC Required, No Credit Check.
                                </TextSubtract>
                            </CreditCheck>
                            <TitleHero>
                                Welcome to YourBank
                                Empowering Your <span>Financial Journey</span>
                            </TitleHero>
                            <Title>
                                At YourBank, our mission is to provide comprehensive banking solutions
                                that empower individuals and businesses to achieve their financial goals.
                                We are committed to delivering personalized and innovative services that prioritize our customers' needs.
                            </Title>
                            <StyleLink to={'/login'}>
                                Open Account
                            </StyleLink>
                        </InfoHero>
                        <ImagesHero>
                            <MainImages src={mainImages}/>
                        </ImagesHero>
                    </HeroContent>
                </HeroSection>
            </LayoutWindow>
        </>
    )
}
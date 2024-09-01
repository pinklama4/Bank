import {useState} from "react";
import {
    AbstractImg, BoxProducts, BusinessesCard, ButtonContainer,
    CreditCheck,
    HeroContent,
    HeroSection,
    ImagesHero, IndividualsCard,
    InfoHero,
    MainImages,
    Products,
    ProductsContent, ProductsForBusinesses, ProductsForIndividuals,
    ProductsHeader, StyledButtonBusinesses,
    StyledButtonIndividuals,
    StyledTextProducts,
    StyledTitleProducts, StyleImagesProducts,
    StyleLink,
    SubtractImg, TextProductsCard,
    TextSubtract,
    Title,
    TitleHero, TitleProductsCard
} from "./Home.style.js";
import {LayoutGridHome} from "../../theme/LayoutGrid/LayoutGridHome.js";
import {LayoutWindow} from "../../theme/LayoutWindow.js";
import abstract from '../../assets/image/AbstractDesign.png'
import subtract from '../../assets/image/Subtract.png'
import mainImages from '../../assets/image/mainImg.png'
import imgProducts from '../../assets/image/IconProducts.png'
import imgProducts2 from '../../assets/image/IconProducts2.png'
import imgProducts3 from '../../assets/image/IconProducts3.png'






export function Home () {
    const [content, setContent] = useState('ForIndividuals')

    const showContentIndividuals = () => {
        setContent('ForIndividuals')

    }
    const showContentBusinesses = () => {
        setContent('ForBusinesses')
        console.log('контент 2')
    }
    return(
        <>
            <LayoutWindow>
                <LayoutGridHome>
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

                    <Products>
                        <ProductsContent>
                            <ProductsHeader>
                                <div>
                                    <StyledTitleProducts>
                                        Our <span>Products</span>
                                    </StyledTitleProducts>
                                    <StyledTextProducts>
                                        Discover a range of comprehensive and customizable banking products
                                        at YourBank, designed to suit your <br/> unique financial needs and aspirations
                                    </StyledTextProducts>
                                </div>
                                <ButtonContainer>
                                    <StyledButtonIndividuals
                                        onClick={showContentIndividuals}
                                        className={content === 'ForIndividuals' ? 'active-individuals': ''}
                                    >
                                            For Individuals
                                    </StyledButtonIndividuals>

                                    <StyledButtonBusinesses
                                        onClick={showContentBusinesses}
                                        className={content === 'ForBusinesses' ? 'active-businesses': ''}
                                    >
                                         For Businesses
                                    </StyledButtonBusinesses>
                                </ButtonContainer>
                            </ProductsHeader>
                            <BoxProducts>
                                {content === 'ForIndividuals' && (
                                    <ProductsForIndividuals>
                                        <IndividualsCard>
                                            <StyleImagesProducts src={imgProducts}/>
                                            <TitleProductsCard>
                                                Checking Accounts
                                            </TitleProductsCard>
                                            <TextProductsCard>
                                                Enjoy easy and convenient access to your funds with our range
                                                of checking account options. Benefit from features such as online and
                                                mobile banking, debit cards, and free ATM access.
                                            </TextProductsCard>
                                        </IndividualsCard>

                                        <IndividualsCard>
                                            <StyleImagesProducts src={imgProducts2}/>
                                            <TitleProductsCard>
                                                Savings Accounts
                                            </TitleProductsCard>
                                            <TextProductsCard>
                                                Build your savings with our competitive interest rates and flexible
                                                savings account options. Whether you're saving for a specific goal
                                                or want to grow your wealth over time, we have the right account for you.
                                            </TextProductsCard>
                                        </IndividualsCard>

                                        <IndividualsCard>
                                            <StyleImagesProducts src={imgProducts3}/>
                                            <TitleProductsCard>
                                                Loans and Mortgages
                                            </TitleProductsCard>
                                            <TextProductsCard>
                                                Realize your dreams with our flexible loan and mortgage options. From personal
                                                loans to home mortgages, our experienced loan officers are here to guide you
                                                through the application process and help you secure the funds you need.
                                            </TextProductsCard>
                                        </IndividualsCard>

                                    </ProductsForIndividuals>
                                )}
                                {content === 'ForBusinesses' && (
                                    <ProductsForBusinesses>
                                        <BusinessesCard>
                                            <StyleImagesProducts src={imgProducts2}/>
                                            <TitleProductsCard>
                                                Savings Accounts
                                            </TitleProductsCard>
                                            <TextProductsCard>
                                                Build your savings with our competitive interest rates and flexible
                                                savings account options. Whether you're saving for a specific goal
                                                or want to grow your wealth over time, we have the right account for you.
                                            </TextProductsCard>
                                        </BusinessesCard>

                                        <BusinessesCard>
                                            <StyleImagesProducts src={imgProducts3}/>
                                            <TitleProductsCard>
                                                Loans and Mortgages
                                            </TitleProductsCard>
                                            <TextProductsCard>
                                                Realize your dreams with our flexible loan and mortgage options. From personal
                                                loans to home mortgages, our experienced loan officers are here to guide you
                                                through the application process and help you secure the funds you need.
                                            </TextProductsCard>
                                        </BusinessesCard>

                                        <BusinessesCard>
                                            <StyleImagesProducts src={imgProducts}/>
                                            <TitleProductsCard>
                                                Checking Accounts
                                            </TitleProductsCard>
                                            <TextProductsCard>
                                                Enjoy easy and convenient access to your funds with our range
                                                of checking account options. Benefit from features such as online and
                                                mobile banking, debit cards, and free ATM access.
                                            </TextProductsCard>
                                        </BusinessesCard>
                                    </ProductsForBusinesses>
                                )}
                            </BoxProducts>
                        </ProductsContent>
                    </Products>
                </LayoutGridHome>
            </LayoutWindow>
        </>
    )
}
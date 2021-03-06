import React, { useEffect } from "react";
// import ParticlesBg from "particles-bg";
import {
  Container,
  InfoRow,
  InfoCol,
  Content,
  Title,
  Heading,
  Description,
  ContentBtn,
  ImageWrapper,
  Img,
} from "./Home.elements";
// import bg1 from "../../images/power-distribution-system-3.jpg";
import bg1 from "../../images/bg6.png";
// import bg1 from "../../images/bg1.svg";
import { Link } from "react-router-dom";

const Home = () => {
  // useEffect(() => {
  //   document.querySelector('#container').scrollTop = 0;
  // },[])
  return (
    <>
      <Container id="container">
        <InfoRow>
          <InfoCol flag={false}>
            <Content>
              <Title>Distribution System !</Title>
              <Heading>
                Customer failure statistics reinforce the need of evaluating
                reliability indices
              </Heading>
              <Description>
                The electric utility industry has developed several measures of
                reliability to measure system performance. In order to
                facilitate the quantitative analysis of the reliability of large
                distribution systems, user needs to calculate the various
                indices of reliability !
              </Description>
              <ContentBtn>
                <Link to="/custom-input">Get Started</Link>
              </ContentBtn>
            </Content>
          </InfoCol>
          <InfoCol flag={true}>
            <ImageWrapper>
              <Img id="hero-lazy-svg" src={bg1} alt="Background-Image" />
            </ImageWrapper>
          </InfoCol>
        </InfoRow>
      </Container>
    </>
  );
};

export default Home;

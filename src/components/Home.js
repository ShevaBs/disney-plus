import React from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';

const Home = () => {
  return (
    <Container>
      <ImgSlider/>
      <Viewers/>
    </Container>
  )
}

export default Home

const Container = styled.main`
  overflow-x: hidden;
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  background: #040714 url('/images/home-background.png') center center / cover no-repeat fixed;
`;
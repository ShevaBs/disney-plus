import React from 'react';
import styled from 'styled-components';

const Detail = () => {
  return (
    <Container>
      <Background>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="" />
      </Background>

      <ImageTitle>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" alt="" />
      </ImageTitle>

      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="play-button"/>
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="play-button"/>
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="group-icon" />
        </GroupWatchButton>
      </Controls>

      <Subtitle>
        2021 • 7m • Family, Fantasy, Kids, Animation
      </Subtitle>
      <Description>
        Chinese mom suffering from empty nest syndrome gets another chance at motherhood when one of her dumplings springs to life as a lively, giggly dumpling boy.
      </Description>
    </Container>
  )
}

export default Detail;

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin: 60px 0;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 4px;
  font-size: 15px;
  letter-spacing: 1.8px;
  outline: none;
  height: 56px;
  background-color: #fff;
  padding: 0 24px;
  margin-right: 22px;
  cursor: pointer;

  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background-color: rgb(0, 0, 0, 0.3);
  border: 1px solid #ccc;
  color: #fff;
  text-transform: uppercase;
`;

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  background-color: rgb(0, 0, 0, 0.6);
  cursor: pointer;
  margin-right: 16px;

  span {
    font-size: 35px;
    color: #fff;
  }

  &:hover {
    background-color: rgb(198, 198, 198);
    span {
      color: rgb(0, 0, 0, 0.6);
    }
  }

`;

const GroupWatchButton = styled(AddButton)``;

const Subtitle = styled.div`
  font-size: 15px;
  margin: 27px 0;
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  max-width: 750px;
`;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import db from '../firebase';

const Detail = () => {
  const {id} = useParams();
  const [movie, setMovie] = useState();
  
  useEffect(() => {
    // Grab movie from db
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if(doc.exists) {
          // save movie data
          setMovie(doc.data());
        } else {
          //redirect to homepage
          
        }
      })    
  }, [id]);

  console.log(movie);
  
  if(!movie) {
    return <span>loading...</span>
  }

  return (
    <Container>
      <Background>
        <img src={movie.image} alt="" />
      </Background>

      <ImageTitle>
        <img src={movie.logo} alt="" />
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
        {movie.subtitle}
      </Subtitle>
      <Description>
        {movie.description}
      </Description>
    </Container>
  )
}

export default Detail;

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 0 calc(3.5vw + 5px);
  padding-top: 70px;
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
    opacity: 0.5;
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

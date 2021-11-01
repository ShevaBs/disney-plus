import React, { useEffect } from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Movies from './Movies';
import Viewers from './Viewers';
import db from '../firebase';
import {setMovies} from '../features/movieSlice';
import { useDispatch } from 'react-redux';
 
const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      const tempMovies = snapshot.docs.map( doc => {
        return {  id: doc.id, ...doc.data() }
      });

      dispatch(setMovies(tempMovies));
    });
  }, [dispatch]);

  return (
    <Container>
      <ImgSlider/>
      <Viewers/>
      <Movies/>
    </Container>
  )
}

export default Home

const Container = styled.main`
  overflow-x: hidden;
  min-height: 100vh;
  padding: 0 calc(3.5vw + 5px);
  padding-top: 90px;
  background: #040714 url('/images/home-background.png') center center / cover no-repeat fixed;
`;
import React from 'react'
import styled from 'styled-components';

const Login = () => {
  return (
    <Container>
      <CTA>
        <CTALogoOne src='/images/cta-logo-one.svg'/>
        <SignUp>Get all there</SignUp>
        <Description>
          Continuing on with this approach, you can now watch Raya and the Last Dragon via Disney Plus Premier Access, with news that Cruella is coming May 28, and Black Widow expected in July.
        </Description>
        <CTALogoTwo src='/images/cta-logo-two.png'/>
      </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
  min-height: calc(100vh - 70px); 
  background: url('/images/login-background.jpg') 0 70px / cover no-repeat fixed;
  display: grid;
  place-items: center;

`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CTALogoOne = styled.img``;
const CTALogoTwo = styled.img`
  margin: 15px auto;
  width: 80%;

`;

const SignUp = styled.a`
  text-transform: uppercase;
  background-color: #0063e5;
  font-weight: 700;
  text-align: center;
  padding: 17px 0;
  margin: 8px 0 12px 0;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  letter-spacing: 1.5px;
  transition: all .25s;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  text-align: center;
  font-size: 14px;
  letter-spacing: 1.5px;
  line-height: 1.5;
`;
import styled from "styled-components";
import marioImage from "./assets/mario-6.webp";
import bg from "./assets/tela-mario.webp";

export const Container = styled.main`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  height: 100vh;
  width: 100%;
  padding: 1.5rem;
  display: flex;

  @media (max-width: 550px) {
    justify-content: center;
    padding: 2rem 1.5rem;
    height: auto;
  }
`;

export const Content = styled.div`
  max-width: 1000px;
  margin: auto;
  flex: 1;

  @media (max-width: 980px) {
    max-width: 500px;
  }
`;

export const AreaLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
  /* max-width: 350px; */
  margin: 0 auto;

  @media (max-width: 550px) {
    padding-bottom: 30px;
  }
`;

export const Logo = styled.img`
  /* max-width: 500px; */

  @media (min-width: 551px) and (max-width: 1024px) {
    height: 110px;
    width: 250px;
  }

  @media (max-width: 550px) {
    height: 110px;
    width: 250px;
  }
`;

export const FlexArea = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 980px) {
    flex-direction: column-reverse;
    gap: 20px;
  }
`;

export const GridArea = styled.div`
  display: flex;
  justify-content: center;
  background: #dcfce7;
  border: 13px solid #15803d;
  box-shadow: inset 3px 3px 0 #14532d, inset -3px -3px 0 #14532d;
  border-radius: 6px;
  position: relative;
  padding: 1.5rem;
  z-index: 1;

  &::after {
    content: "";
    display: inline-block;
    width: 150px;
    height: 450px;
    background: url(${marioImage});
    position: absolute;
    background-size: contain;
    background-repeat: no-repeat;
    left: -77px;
    top: -154px;
    z-index: -1;

    @media (max-width: 1128px) {
      display: none;
    }
  }

  @media (max-width: 980px) {
    border: 3px solid #15803d;
  }

  @media (min-width: 551px) and (max-width: 1024px) {
    padding: 0;
    width: auto;
  }

  @media (max-width: 550px) {
    padding: 0;
    width: 100%;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: auto;
  border-radius: 6px;
  padding: 30px 50px;
  background: #dcfce7;
  border: 13px solid #15803d;
  box-shadow: inset 3px 3px 0 #14532d, inset -3px -3px 0 #14532d;

  @media (max-width: 980px) {
    border: 3px solid #15803d;
  }

  @media (max-width: 550px) {
    padding: 30px;
  }
`;

export const InfoArea = styled.div`
  @media (max-width: 980px) {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
    width: 100%;
  }
`;

export const Grid = styled.div`
  width: 520px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  flex: 1;
  padding: 1rem;

  border-radius: 6px;

  @media (max-width: 680px) {
    width: auto;
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(3, 1fr);
    width: auto;
    gap: 1rem;
  }
`;

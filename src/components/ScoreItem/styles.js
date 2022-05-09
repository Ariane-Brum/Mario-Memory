import styled from "styled-components";
import { keyframes } from "styled-components";

const rotate2 = keyframes`
  0% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  position: relative;
  align-items: center;
  gap: 1rem;
  animation: ${rotate2} 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
`;

export const ScoreTitle = styled.h1`
  font-size: 2rem;
  line-height: 32px;
  text-align: center;
  color: #14532d;
`;

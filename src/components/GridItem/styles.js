import styled from "styled-components";
import { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotateY(180deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

const rotate2 = keyframes`
  0% {
    transform: rotateY(-180deg);
  }
  100% {
    transform: rotateY(-360deg);
  }
`;

export const Container = styled.div`
  background: ${(props) =>
    props.showBackground
      ? "#86EFAC"
      : "linear-gradient(180deg, #86EFAC 0%, #22C55E 100%)"};

  padding: 2px;
  animation: ${(props) => (props.showBackground ? rotate : rotate2)} 0.4s
    cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
  border-radius: 8px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 2px solid #14532d;
  box-shadow: 2px 2px 2px #14532d;
`;

export const Icon = styled.img`
  width: 80px;
`;

export const IconPrimary = styled.img`
  width: 40px;
  height: 40px;
`;

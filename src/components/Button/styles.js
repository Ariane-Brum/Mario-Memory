import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  background: linear-gradient(180deg, #22c55e 0%, #16a34a 100%);
  box-shadow: inset -1px -1px 1px #14532d;

  border-radius: 10px;
  cursor: pointer;
  opacity: 1;
  transition: all ease 0.3s;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 980px) {
    margin: 0 auto;
  }
`;

export const IconArea = styled.div`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0 15px;
`;

export const Icon = styled.img`
  height: 25px;
`;

export const Label = styled.div`
  height: inherit;
  color: #f0fdf4;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 0 20px;
  text-transform: uppercase;
`;

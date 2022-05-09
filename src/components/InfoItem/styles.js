import styled from "styled-components";

export const Small = styled.span`
  display: flex;
  align-items: center;
  color: #14532d;
  margin-top: 15px;
  margin-bottom: 10px;

  @media (max-width: 980px) {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
`;

export const Img = styled.img``;

export const LabelInfo = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: #14532d;
  font-family: "Roboto", sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 980px) {
    flex-direction: column;
  }
`;

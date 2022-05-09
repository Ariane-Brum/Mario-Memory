import styled from "styled-components";

export const LabelClock = styled.span`
  display: flex;
  align-items: center;
  color: #14532d;
  margin-top: 15px;
  margin-bottom: 10px;
  @media (max-width: 980px) {
    display: none;
  }
`;

export const ClockArea = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 980px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ClockValue = styled.div`
  font-size: 50px;
  font-weight: bold;
  color: #14532d;
  font-family: "Roboto", sans-serif;
`;

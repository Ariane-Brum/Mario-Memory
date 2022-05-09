import React from "react";
import * as C from "./styles";
import img from "../../assets/joinha2.webp";
export const ScoreItem = () => {
  return (
    <C.Container>
      <C.ScoreTitle>Parabéns, você conseguiu!!</C.ScoreTitle>
      <img
        src={img}
        alt="Um desenho de um cogumelo acenando"
        width={100}
        height={150}
      />
    </C.Container>
  );
};

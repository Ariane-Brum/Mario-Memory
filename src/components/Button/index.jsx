import * as C from "./styles";

export const Button = ({ label, icon, onClick }) => {
  return (
    <C.Container onClick={onClick}>
      <C.Label>{label}</C.Label>
    </C.Container>
  );
};

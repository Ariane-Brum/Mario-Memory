import * as C from "./styles";

export const Move = ({ icon, value, label }) => {
  return (
    <>
      <C.LabelMove>{label}</C.LabelMove>
      <C.MoveArea>
        <C.MoveImg src={icon} width={50} />
        <C.MoveValue>{value}</C.MoveValue>
      </C.MoveArea>
    </>
  );
};

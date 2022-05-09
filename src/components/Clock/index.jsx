import * as C from "./styles";

export const Clock = ({ icon, value, label }) => {
  return (
    <>
      <C.LabelClock>{label}</C.LabelClock>
      <C.ClockArea>
        <C.ClockImg src={icon} />
        <C.ClockValue>{value}</C.ClockValue>
      </C.ClockArea>
    </>
  );
};

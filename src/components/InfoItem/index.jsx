import * as C from "./styles";

export const InfoItem = ({ icon, labelInfo, small, alt }) => {
  return (
    <>
      <C.Container>
        <C.Small>{small}</C.Small>
        <C.LabelInfo>
          <C.Img src={icon} height={80} width={60} alt={alt} />
          {labelInfo}
        </C.LabelInfo>
      </C.Container>
    </>
  );
};

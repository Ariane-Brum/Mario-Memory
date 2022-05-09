import * as C from "./styles";
import interrogacaoSvg from "../../assets/interrogacao.svg";
import { items } from "../../data/items";

export const GridItem = ({ item, onClick }) => {
  return (
    <C.Container
      onClick={onClick}
      showBackground={item.permanentShown || item.shown}
    >
      {item.permanentShown === false && item.shown === false && (
        <C.IconPrimary src={interrogacaoSvg} alt="" opacity={0.1} />
      )}
      {(item.permanentShown || item.shown) && item.item !== null && (
        <C.Icon src={items[item.item].icon} alt={items[item.item].name} />
      )}
    </C.Container>
  );
};

import { useEffect, useState } from "react";
import * as C from "./App.styles";

import logoImage from "./assets/minha-logo3.webp";
import clock from "./assets/mush.svg";
import move from "./assets/mario_running3.webp";

import { items } from "./data/items";

import { Button } from "./components/Button";
import { InfoItem } from "./components/InfoItem";
import { GridItem } from "./components/GridItem";
import { formatTimeElapsed } from "./helpers/formatTimeElapsed";
import { ScoreItem } from "./components/ScoreItem";

const App = () => {
  const [playing, setPlaying] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [moveCount, setMoveCount] = useState(0);

  const [shownCount, setShownCount] = useState(0);
  const [hits, setHits] = useState(0);
  const [gridItems, setGridItems] = useState([]);

  useEffect(() => {
    if (shownCount === 2) {
      let opened = gridItems.filter((item) => item.shown === true);
      if (opened.length === 2) {
        if (opened[0].item === opened[1].item) {
          let tmpGrid = [...gridItems];
          setHits(hits + 1);
          for (let i in tmpGrid) {
            if (tmpGrid[i].shown) {
              tmpGrid[i].permanentShown = true;
              tmpGrid[i].shown = false;
            }
          }
          setGridItems(tmpGrid);
          setShownCount(0);
        } else {
          setTimeout(() => {
            let tmpGrid = [...gridItems];
            for (let i in tmpGrid) {
              tmpGrid[i].shown = false;
            }
            setGridItems(tmpGrid);
            setShownCount(0);
          }, 1000);
        }

        setMoveCount((moveCount) => moveCount + 1);
      }
    }
  }, [shownCount, gridItems, hits]);

  useEffect(() => {
    if (
      moveCount > 0 &&
      gridItems.every((item) => item.permanentShown === true)
    ) {
      setPlaying(false);
    }
  }, [moveCount, gridItems]);

  useEffect(() => {
    resetAndCreateGrid();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (playing) {
        setTimeElapsed(timeElapsed + 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [playing, timeElapsed]);

  const resetAndCreateGrid = () => {
    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);
    setHits(0);

    let tmpGrid = [];
    for (let i = 0; i < items.length * 2; i++) {
      tmpGrid.push({
        item: null,
        shown: false,
        permanentShown: false,
      });
    }
    for (let w = 0; w < 2; w++) {
      for (let i = 0; i < items.length; i++) {
        let pos = -1;
        while (pos < 0 || tmpGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (items.length * 2));
        }
        tmpGrid[pos].item = i;
      }
    }
    setGridItems(tmpGrid);

    setPlaying(true);
  };

  const handleItemClick = (index) => {
    if (playing && index !== null && shownCount < 2) {
      let tmpGrid = [...gridItems];

      if (
        tmpGrid[index].permanentShown === false &&
        tmpGrid[index].shown === false
      ) {
        tmpGrid[index].shown = true;
        setShownCount(shownCount + 1);
      }

      setGridItems(tmpGrid);
    }
  };

  return (
    <>
      <C.Container>
        <C.Content>
          <C.AreaLogo>
            <C.Logo src={logoImage} width={492} height={203} alt="" />
          </C.AreaLogo>
          <C.FlexArea>
            <C.GridArea>
              {gridItems.every((item) => item.permanentShown === true) ? (
                <ScoreItem />
              ) : (
                <C.Grid>
                  {gridItems.map((item, index) => (
                    <GridItem
                      key={index}
                      item={item}
                      onClick={() => handleItemClick(index)}
                    />
                  ))}
                </C.Grid>
              )}
            </C.GridArea>

            <C.Info>
              <C.InfoArea>
                <InfoItem
                  icon={clock}
                  labelInfo={formatTimeElapsed(timeElapsed)}
                  small="Tempo"
                  alt="Ícone de um relógio no formato de um cogumelo"
                />
                <InfoItem
                  icon={move}
                  height="true"
                  labelInfo={moveCount}
                  small="Movimentos"
                  alt="Ícone de um cogumelo caminhando."
                />
              </C.InfoArea>

              <Button label="Reiniciar" onClick={resetAndCreateGrid} />
            </C.Info>
          </C.FlexArea>
        </C.Content>
      </C.Container>
    </>
  );
};

export default App;

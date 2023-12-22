import type { ReactElement } from "react";
import { useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import update from "immutability-helper";
import { useRecoilState } from "recoil";
import { pageState } from "../store";
import { DraggableBox } from "./draggable-box";
import type { DragItem } from "./interfaces";
import { ItemTypes } from "./item-types";
import { snapToGrid as doSnapToGrid } from "./snap-to-grid";

export interface ContainerProps {
  snapToGrid: boolean;
}

type BoxMap = Record<string, { top: number; left: number; title: string }>;

function Container({ snapToGrid }): ReactElement<ContainerProps> {
  const [curState, setCurState] = useRecoilState(pageState);

  console.log("curStatecurState", curState);

  const [boxes, setBoxes] = useState<BoxMap>({
    a: { top: 20, left: 80, title: "Drag me around" },
    b: { top: 180, left: 20, title: "Drag me too" },
  });

  const moveBox = useCallback(
    (id: string, left: number, top: number) => {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top },
          },
        })
      );
    },
    [boxes]
  );

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      drop(item: DragItem, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as {
          x: number;
          y: number;
        };

        let left = Math.round(item.left + delta.x);
        let top = Math.round(item.top + delta.y);
        if (snapToGrid) {
          [left, top] = doSnapToGrid(left, top);
        }

        const posRect = { x: left, y: top };
        let current = JSON.parse(JSON.stringify(curState[0]));
        current.posRect = posRect;
        current.name = item.id;
        setCurState([current]);

        moveBox(item.id, left, top);
        return undefined;
      },
    }),
    [moveBox]
  );

  return (
    <div className='w-full h-full relative' ref={drop}>
      {Object.keys(boxes).map((key) => (
        <DraggableBox
          key={key}
          id={key}
          {...(boxes[key] as { top: number; left: number; title: string })}
        />
      ))}
    </div>
  );
}

export default Container;

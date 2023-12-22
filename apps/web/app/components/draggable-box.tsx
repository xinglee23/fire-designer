import type { CSSProperties, FC } from "react";
import { memo, useEffect } from "react";
import type { DragSourceMonitor } from "react-dnd";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import { Widget } from "./widget";
import { ItemTypes } from "./item-types";

function getStyles(
  left: number,
  top: number,
  isDragging: boolean
): CSSProperties {
  const transform = `translate3d(${left}px, ${top}px, 0)`;
  return {
    position: "absolute",
    transform,
    WebkitTransform: transform,
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : "",
  };
}

export interface DraggableBoxProps {
  id: string;
  title: string;
  left: number;
  top: number;
}

export const DraggableBox: FC<DraggableBoxProps> = memo(
  function DraggableBox(props) {
    const { id, title, left, top } = props;
    const [{ isDragging }, drag, preview] = useDrag(
      () => ({
        type: ItemTypes.BOX,
        item: { id, left, top, title },
        collect: (monitor: DragSourceMonitor) => ({
          isDragging: monitor.isDragging(),
        }),
      }),
      [id, left, top, title]
    );

    useEffect(() => {
      preview(getEmptyImage(), { captureDraggingState: true });
    }, []);

    return (
      <div
        ref={drag}
        role='DraggableBox'
        style={getStyles(left, top, isDragging)}
      >
        <Widget title={title} />
      </div>
    );
  }
);

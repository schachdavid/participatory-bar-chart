import { useDrag } from "react-dnd";
import React from "react";

import { blockDndType } from "../config";
import cn from "./index.module.css";
import { cx } from "../../../utils";

const padding = 1;

const getXStretch = (barWidth) => barWidth / 5;
const getYStretch = (barWidth) => barWidth / 4;

export const Placeholder = ({ barWidth, className, scaleX, yShift=0 }) => {
  const width = barWidth;
  const xStretch = getXStretch(barWidth);
  const yStretch = getYStretch(barWidth);

  return (
    <g
      transform={`translate(${
        barWidth && scaleX ? scaleX.bandwidth() / 2 - barWidth / 2 : 0
      }, ${yShift})`}
      className={className}
    >
      <path
        className={cx(className)}
        d={`M0 0 L${width} 0  L${
          width + xStretch
        } ${-yStretch} L${xStretch} ${-yStretch} Z`}
        shapeRendering="crispEdges"
      />
    </g>
  );
};

export const StaticBlock = React.forwardRef(
  (
    {
      className,
      barWidth,
      scaleX,
      height: rawHeight,
      yShift = 0,
      isTop,
      wrapSvg,
    },
    ref
  ) => {
    const width = barWidth || scaleX?.bandwidth();
    const height = rawHeight - padding * 2;
    const xStretch = getXStretch(barWidth);
    const yStretch = getYStretch(barWidth);

    const content = (
      <g
        ref={ref}
        transform={`translate(${
          barWidth && scaleX ? scaleX.bandwidth() / 2 - barWidth / 2 : 0
        }, ${-yShift - padding})`}
        className={className}
      >
        <rect
          className={cn.bar}
          style={{ cursor: "grab" }}
          height={height}
          width={width}
          shapeRendering="crispEdges"
        />
        <path
          className={cn.rightSide}
          d={`M${width} 0 L${width} ${height} L${width + xStretch} ${
            height - yStretch
          } L${width + xStretch} ${-yStretch} Z`}
          shapeRendering="crispEdges"
        />
        {isTop && (
          <path
            className={cn.top}
            d={`M0 0 L${width} 0  L${
              width + xStretch
            } ${-yStretch} L${xStretch} ${-yStretch} Z`}
            shapeRendering="crispEdges"
          />
        )}
      </g>
    );

    return wrapSvg ? (
      <svg height={height + 25} width={barWidth + 25} className={cn.svgWrapper}>
        {content}
      </svg>
    ) : (
      content
    );
  }
);

export const Block = ({
  className,
  barWidth,
  scaleX,
  height,
  yShift = 0,
  removeItem,
  isTop,
  wrapSvg,
}) => {
  const [, drag] = useDrag(() => {
    return {
      type: blockDndType,
      item: () => {
        if (removeItem) removeItem();
        return { height, width: barWidth };
      },
    };
  }, [removeItem, barWidth]);

  return (
    <StaticBlock
      ref={drag}
      wrapSvg={wrapSvg}
      className={className}
      barWidth={barWidth}
      scaleX={scaleX}
      height={height}
      yShift={yShift}
      removeItem={removeItem}
      isTop={isTop}
    />
  );
};

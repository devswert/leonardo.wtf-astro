/**
 * Utils adapted from https://github.com/anup-a/svgwave/blob/main/src/core/wave.js#L32
 * Main repo: https://github.com/anup-a/svgwave/tree/main
 */

import { computeControlPoints } from "./bezier-spline";

type GeneratePointsOptions = {
  width: number;
  height: number;
  segmentCount: number;
  layerCount: number;
  variance: number;
};

type GenerateClosedPathOptions = {
  height: number;
  width: number;
  segmentCount: number;
  layerCount: number;
  variance: number;
};

type Point = {
  x: number;
  y: number;
};

// layer count is default to 2.
// Increasing the number would stack up n-1 waves.
function generatePoints(options: GeneratePointsOptions): Array<Array<Point>> {
  const cellWidth = options.width / options.segmentCount;
  const cellHeight = options.height / options.layerCount;
  const moveLimitX = cellWidth * options.variance * 0.5;
  const moveLimitY = cellHeight * options.variance;

  const points: Array<Array<Point>> = [];
  for (let y = cellHeight; y < options.height; y += cellHeight) {
    let pointsPerLayer = [];
    pointsPerLayer.push({ x: 0, y: Math.floor(y) });
    for (let x = cellWidth; x < options.width; x += cellWidth) {
      const varietalY = y - moveLimitY / 2 + Math.random() * moveLimitY;

      const varietalX = x - moveLimitX / 2 + Math.random() * moveLimitX;
      pointsPerLayer.push({
        x: Math.floor(varietalX),
        y: Math.floor(varietalY),
      });
    }
    pointsPerLayer.push({ x: options.width, y: Math.floor(y) });
    points.push(pointsPerLayer);
  }
  return points;
}

export function GenerateClosedPath(options: GenerateClosedPathOptions): string {
  const leftCornerPoint = { x: 0, y: options.height };
  const rightCornerPoint = { x: options.width, y: options.height };

  const curvePoints = generatePoints({
    width: options.width,
    height: options.height,
    segmentCount: options.segmentCount,
    layerCount: options.layerCount,
    variance: options.variance,
  })[0];
  const xPoints = curvePoints.map((p) => p.x);
  const yPoints = curvePoints.map((p) => p.y);

  const xControlPoints = computeControlPoints(xPoints);
  const yControlPoints = computeControlPoints(yPoints);

  let path =
    `M ${leftCornerPoint.x},${leftCornerPoint.y} ` +
    `C ${leftCornerPoint.x},${leftCornerPoint.y} ` +
    `${xPoints[0]},${yPoints[0]} ` +
    `${xPoints[0]},${yPoints[0]} `;

  for (let i = 0; i < xPoints.length - 1; i++) {
    path +=
      `C ${xControlPoints.p1[i]},${yControlPoints.p1[i]} ` +
      `${xControlPoints.p2[i]},${yControlPoints.p2[i]} ` +
      `${xPoints[i + 1]},${yPoints[i + 1]} `;
  }

  path +=
    `C ${xPoints[xPoints.length - 1]},${yPoints[xPoints.length - 1]} ` +
    `${rightCornerPoint.x},${rightCornerPoint.y} ` +
    `${rightCornerPoint.x},${rightCornerPoint.y} Z`;

  return path;
}

import anime from "animejs";
import pkg from "blobs/v2";
import { useRef, useState } from "react";
import classnames from "classnames";
const { svgPath } = pkg;

import { useInterval, useRandomNumber } from "../utils/hooks";

interface BurbleShapeProps {
  images: Array<string>;
  randomOrder: boolean;
}

const defaultOptionsSVGPath = {
  extraPoints: 8,
  randomness: 4,
  size: 500,
};

function generateSVGPath() {
  return svgPath({ ...defaultOptionsSVGPath, seed: useRandomNumber() });
}

const BurbleShape = (props: BurbleShapeProps) => {
  let images = props.images;
  if (props.randomOrder) {
    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }
  }

  return (
    <BurbleShapeImplementation
      images={images}
      randomOrder={props.randomOrder}
    />
  );
};

const BurbleShapeImplementation = (props: BurbleShapeProps) => {
  if (props.images.length == 0) {
    return null;
  }

  const blobRef = useRef(null);
  const blobPathId = `blob-path-${useRandomNumber()}`;
  const imageShapeId = `image-shape-${blobPathId}`;

  // State
  const [currentPosition, setCurrentPosition] = useState(1);
  const [imageContainer1, setImageContainer1] = useState(props.images[0]);
  const [imageContainer2, setImageContainer2] = useState(
    props.images[props.images.length == 1 ? 0 : 1],
  );
  const [currentContainer, setCurrentContainer] = useState("C1");
  const [pathState, setPathState] = useState(generateSVGPath());

  const changeShape = () => {
    const svgPath = generateSVGPath();

    anime({
      targets: blobRef.current,
      easing: "easeInOutCubic",
      duration: 600,
      d: svgPath,
      changeComplete: () => {
        setPathState(svgPath);
      },
    });
  };

  const flipContainers = () => {
    setCurrentContainer(currentContainer == "C1" ? "C2" : "C1");
  };

  const updateNextImage = () => {
    const qty = props.images.length;
    setCurrentPosition(currentPosition + 1 === qty ? 0 : currentPosition + 1);
    if (currentContainer === "C1") {
      setImageContainer2(props.images[currentPosition]);
    } else {
      setImageContainer1(props.images[currentPosition]);
    }
  };

  if (props.images.length === 1) {
    useInterval(changeShape, 3000);
  } else {
    useInterval(() => {
      changeShape();
      flipContainers();
      updateNextImage();
    }, 3000);
  }

  return (
    <>
      <svg id="svg-container" viewBox="0 0 512 512">
        <defs>
          <clipPath id={imageShapeId}>
            <path
              ref={blobRef}
              id={blobPathId}
              d={pathState}
              fill="#306564"
            ></path>
          </clipPath>
        </defs>

        <image
          className={classnames(
            "transition-opacity duration-700 mx-auto",
            currentContainer === "C1" ? "opacity-100" : "opacity-0",
          )}
          width="100%"
          clipPath={`url(#${imageShapeId})`}
          href={imageContainer1}
        ></image>

        <image
          className={classnames(
            "transition-opacity duration-700 mx-auto",
            currentContainer === "C2" ? "opacity-100" : "opacity-0",
          )}
          width="100%"
          clipPath={`url(#${imageShapeId})`}
          href={imageContainer2}
        ></image>
      </svg>
    </>
  );
};

export default BurbleShape;

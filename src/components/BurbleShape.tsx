import anime from "animejs";
import pkg from "blobs/v2";
import { useEffect, useRef, useState } from "react";
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

function shuffleImages(images: Array<string>) {
  const shuffled = [...images];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function generateSVGPath(seed: number) {
  return svgPath({ ...defaultOptionsSVGPath, seed });
}

const BurbleShape = (props: BurbleShapeProps) => {
  const images = props.randomOrder
    ? shuffleImages(props.images)
    : props.images;

  return (
    <BurbleShapeImplementation
      images={images}
      randomOrder={props.randomOrder}
    />
  );
};

const BurbleShapeImplementation = (props: BurbleShapeProps) => {
  if (props.images.length === 0) {
    return null;
  }

  const blobRef = useRef<SVGPathElement>(null);
  const blobPathId = `blob-path-${useRandomNumber()}`;
  const imageShapeId = `image-shape-${blobPathId}`;

  const [currentPosition, setCurrentPosition] = useState(0);
  const [imageContainer1, setImageContainer1] = useState(props.images[0]);
  const [imageContainer2, setImageContainer2] = useState(
    props.images[props.images.length === 1 ? 0 : 1],
  );
  const [currentContainer, setCurrentContainer] = useState<"C1" | "C2">("C1");
  const [pathState, setPathState] = useState(() =>
    generateSVGPath(useRandomNumber()),
  );

  const currentPositionRef = useRef(currentPosition);
  const currentContainerRef = useRef(currentContainer);

  useEffect(() => {
    currentPositionRef.current = currentPosition;
  }, [currentPosition]);

  useEffect(() => {
    currentContainerRef.current = currentContainer;
  }, [currentContainer]);

  useEffect(() => {
    props.images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [props.images]);

  const changeShape = () => {
    const nextPath = generateSVGPath(useRandomNumber());

    anime({
      targets: blobRef.current,
      easing: "easeInOutCubic",
      duration: 600,
      d: nextPath,
      changeComplete: () => {
        setPathState(nextPath);
      },
    });
  };

  const flipContainers = () => {
    setCurrentContainer((prev) => (prev === "C1" ? "C2" : "C1"));
  };

  const prepareNextImage = () => {
    const qty = props.images.length;
    if (qty <= 1) return;

    const nextPosition =
      currentPositionRef.current + 1 >= qty ? 0 : currentPositionRef.current + 1;
    const nextImage = props.images[nextPosition];
    const hiddenContainer = currentContainerRef.current === "C1" ? "C2" : "C1";

    if (hiddenContainer === "C1") {
      setImageContainer1(nextImage);
    } else {
      setImageContainer2(nextImage);
    }

    setCurrentPosition(nextPosition);
  };

  if (props.images.length === 1) {
    useInterval(changeShape, 3000);
  } else {
    useInterval(() => {
      prepareNextImage();
      flipContainers();
      changeShape();
    }, 3000);
  }

  return (
    <svg id="svg-container" viewBox="0 0 512 512" className="block h-full w-full">
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
  );
};

export default BurbleShape;

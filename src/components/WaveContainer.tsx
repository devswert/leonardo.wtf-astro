import { GenerateClosedPath } from "../utils/path-utils";

interface WaveContainerProps {
  color: string;
  children: React.ReactNode;
}

const defaultClosedPathOptions = {
  height: 320,
  width: 1440,
  segmentCount: 5,
  layerCount: 2,
  variance: 0.7,
};

const upPath = GenerateClosedPath(defaultClosedPathOptions);
const downPath = GenerateClosedPath(defaultClosedPathOptions);

const WaveContainer = (props: WaveContainerProps) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1400 300"
        className="-mb-1"
      >
        <path fill={props.color} fillOpacity="1" d={upPath}></path>
      </svg>

      {props.children}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1400 300"
        className="-mt-1"
      >
        <path
          fill={props.color}
          fillOpacity="1"
          d={downPath}
          transform="rotate(-180 700 150)"
        ></path>
      </svg>
    </>
  );
};

export default WaveContainer;

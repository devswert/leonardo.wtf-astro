import { useState, type PropsWithChildren } from "react";
import classnames from "classnames";
import ArrowIcon from "./icons/ArrowIcon.tsx";

interface JobBoxProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  position?: React.ReactNode;
  timeFrame?: React.ReactNode;
  tools?: React.ReactNode;
  descriptionAlwaysVisible?: boolean;
}

const JobBox = (props: PropsWithChildren<JobBoxProps>) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={classnames(
        "my-12 transition-all duration-300 text-brand-green rounded",
        {
          "cursor-pointer": !props.descriptionAlwaysVisible,
          "bg-brand-green text-brand-light px-8 py-8": isActive,
        },
      )}
      onClick={() => {
        if (!props.descriptionAlwaysVisible) {
          setIsActive(!isActive);
        }
      }}
    >
      <div className="flex flex-row items-center justify-between">
        {props.title}

        {!props.descriptionAlwaysVisible && (
          <ArrowIcon
            size={24}
            color={isActive ? "#FDF6EC" : "#306564"}
            className={isActive ? "-rotate-90" : "rotate-90"}
          />
        )}
      </div>

      {props.position}

      {props.timeFrame}

      {(isActive || props.descriptionAlwaysVisible) && props.description}

      <div
        className={classnames("mt-4 rounded inline-flex", {
          "bg-brand-green-light px-2 py-1": isActive,
        })}
      >
        {props.tools}
      </div>
    </div>
  );
};

export default JobBox;

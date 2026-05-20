import { useMemo } from "react";
import classnames from "classnames";
import pkg from "blobs/v2";
import ArrowIcon from "./icons/ArrowIcon.tsx";
import ToolBubble from "./ToolBubble.tsx";
import { useRandomNumber } from "../utils/hooks";
import { seedFromString } from "../utils/blob-path";

const { svgPath } = pkg;

export interface JobBoxProps {
  company: string;
  position: string;
  timeFrame?: string;
  description: string;
  tools: string[];
  isOpen: boolean;
  onToggle: () => void;
}

function generateAccentPath(seed: number) {
  return svgPath({
    extraPoints: 6,
    randomness: 3,
    size: 140,
    seed,
  });
}

function SectionDivider() {
  return (
    <hr
      className="relative z-10 my-6 h-0.5 w-full border-0 bg-brand-light/25"
      aria-hidden="true"
    />
  );
}

const JobBox = ({
  company,
  position,
  timeFrame,
  description,
  tools,
  isOpen,
  onToggle,
}: JobBoxProps) => {
  const accentSeed = useRandomNumber();
  const accentPath = useMemo(
    () => generateAccentPath(accentSeed),
    [accentSeed],
  );

  return (
    <div
      className={classnames(
        "my-12 cursor-pointer text-brand-green transition-all duration-300 ease-out",
        isOpen
          ? [
              "relative overflow-hidden",
              "rounded-[2.25rem_1.35rem_2rem_1.6rem]",
              "bg-brand-green px-8 py-10 sm:px-10 sm:py-11",
              "text-brand-light",
              "shadow-[0_14px_44px_rgba(48,101,100,0.24)]",
              "ring-1 ring-brand-light/20",
            ]
          : "rounded-2xl px-6 py-6 sm:px-8 sm:py-7 hover:bg-brand-green/[0.06]",
      )}
      onClick={onToggle}
    >
      {isOpen && (
        <>
          <svg
            className="pointer-events-none absolute -right-10 -top-8 z-0 h-36 w-36 text-brand-green-light/20"
            viewBox="0 0 140 140"
            aria-hidden="true"
          >
            <path d={accentPath} fill="currentColor" />
          </svg>
          <svg
            className="pointer-events-none absolute -bottom-6 -left-8 z-0 h-24 w-24 text-brand-light/10"
            viewBox="0 0 140 140"
            aria-hidden="true"
          >
            <path
              d={accentPath}
              fill="currentColor"
              transform="scale(0.65) translate(38, 38)"
            />
          </svg>
        </>
      )}

      <div className="relative z-10 flex flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="font-sora text-2xl font-extrabold">{company}</h3>
          <p className="font-sora">{position}</p>
          {timeFrame && (
            <p className="font-sora text-xs font-extralight">{timeFrame}</p>
          )}
        </div>

        <ArrowIcon
          size={24}
          color={isOpen ? "#FDF6EC" : "#306564"}
          className={classnames("shrink-0 transition-transform duration-300", {
            "-rotate-90": isOpen,
            "rotate-90": !isOpen,
          })}
        />
      </div>

      {isOpen && (
        <div className="relative z-10">
          <SectionDivider />

          <p className="font-sora whitespace-pre-line leading-relaxed [text-wrap:pretty]">
            {description}
          </p>

          {tools.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-2 sm:gap-2.5">
              {tools.map((tool) => (
                <ToolBubble
                  key={tool}
                  icon={tool}
                  size={24}
                  bubbleSize={44}
                  seed={seedFromString(`${company}-${tool}`)}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default JobBox;

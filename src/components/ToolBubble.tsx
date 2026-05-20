import { useMemo } from "react";
import BrandIconReact from "./icons/BrandIconReact";
import { generateBlobPath, seedFromString } from "../utils/blob-path";

interface ToolBubbleProps {
  icon: string;
  size?: number;
  bubbleSize?: number;
  seed?: number;
  title?: string;
}

const bubbleFillClass =
  "text-brand-light/10 transition-colors duration-200 group-hover:text-brand-green-light/40";

const ToolBubble = ({
  icon,
  size = 26,
  bubbleSize = 48,
  seed,
  title,
}: ToolBubbleProps) => {
  const blobPath = useMemo(() => {
    const blobSeed = seed ?? seedFromString(icon);
    return generateBlobPath({ seed: blobSeed, size: 80 });
  }, [icon, seed]);

  return (
    <div
      className="group relative flex shrink-0 items-center justify-center"
      style={{ width: bubbleSize, height: bubbleSize }}
      title={title ?? icon}
    >
      <svg
        className={`pointer-events-none absolute inset-0 h-full w-full ${bubbleFillClass}`}
        viewBox="0 0 80 80"
        aria-hidden="true"
      >
        <path d={blobPath} fill="currentColor" />
      </svg>
      <div className="relative z-10">
        <BrandIconReact icon={icon} size={size} />
      </div>
    </div>
  );
};

export default ToolBubble;

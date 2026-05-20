interface Props {
  size: number;
}

export default function FastAPIIcon({ size }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="77" cy="77" fill="#05998b" r="77" />
      <path
        d="M81.375 18.667l-38.75 70H77.5l-3.875 46.666 38.75-70H77.5z"
        fill="#fff"
      />
    </svg>
  );
}

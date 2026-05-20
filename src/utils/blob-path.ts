import pkg from "blobs/v2";

const { svgPath } = pkg;

export type BlobPathOptions = {
  seed: number;
  size?: number;
  extraPoints?: number;
  randomness?: number;
};

export function generateBlobPath({
  seed,
  size = 80,
  extraPoints = 6,
  randomness = 3,
}: BlobPathOptions): string {
  return svgPath({ seed, size, extraPoints, randomness });
}

export function seedFromString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash * 31 + value.charCodeAt(i)) | 0;
  }
  return Math.abs(hash) % 999_999;
}

export function randomBlobSeed(): number {
  return Math.floor(Math.random() * 999_999);
}

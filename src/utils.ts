export function randomPositionPercent() {
  return `${Math.floor(Math.random() * 75) + 5}%`;
}

export function randomHex() {
  return Math.floor(128 + Math.random() * 128).toString(16);
}

export async function pause(milliseconds: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), milliseconds);
  });
}

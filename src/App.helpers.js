export function timeInMin(seconds) {
  const min = Math.floor(seconds / 60);
  const sec =
    Math.floor(seconds % 60) < 10
      ? "0" + Math.floor(seconds % 60)
      : Math.floor(seconds % 60);
  return `${min}:${sec}`;
};

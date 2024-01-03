export const getCurrentPercent = (scroll, start, end) => {
  const currentRange = end - start;
  const currentScroll = scroll - start;
  let currentPercent = (currentScroll / currentRange) * 100;
  if (currentPercent >= 100) currentPercent = 100;
  if (currentPercent <= 0) currentPercent = 0;

  return currentPercent;
};

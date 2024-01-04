export const getCurrentPercent = (scroll, start, end) => {
  const windowWidth = window.innerWidth;
  let multiplier = 1;
  if (windowWidth <= 768) multiplier = 0.7;
  start = start * multiplier;
  end = end * multiplier;
  const currentRange = end - start;
  const currentScroll = scroll - start;
  let currentPercent = (currentScroll / currentRange) * 100;
  if (currentPercent >= 100) currentPercent = 100;
  if (currentPercent <= 0) currentPercent = 0;

  return currentPercent;
};

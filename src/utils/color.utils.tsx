export const darkenColor = (colorHex, amount) => {
  let color = colorHex.startsWith('#') ? colorHex.substring(1) : colorHex;
  let r = parseInt(color.substring(0, 2), 16);
  let g = parseInt(color.substring(2, 4), 16);
  let b = parseInt(color.substring(4, 6), 16);

  r = Math.max(0, r - amount);
  g = Math.max(0, g - amount);
  b = Math.max(0, b - amount);

  return '#' + [r, g, b].map(col => col.toString(16).padStart(2, '0')).join('');
};

export const lightenColor = (colorHex, amount) => {
  let color = colorHex.startsWith('#') ? colorHex.substring(1) : colorHex;
  let r = parseInt(color.substring(0, 2), 16);
  let g = parseInt(color.substring(2, 4), 16);
  let b = parseInt(color.substring(4, 6), 16);

  r = Math.min(255, r + amount);
  g = Math.min(255, g + amount);
  b = Math.min(255, b + amount);

  return '#' + [r, g, b].map(col => col.toString(16).padStart(2, '0')).join('');
};

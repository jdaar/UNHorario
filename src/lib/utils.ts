/**
 * Generates a random color from the COLORS array
 * @since 0.0.3
 * @internal
 */
export function getRandomColor(): string {
  const COLORS = [
    0xf94144, // red
    0xf3722c, // orange
    0xf8961e, // yellow
    0xf9844a, // yellow-orange
    0xf9c74f, // yellow-green
    0x90be6d, // green
    0x43aa8b, // green-blue
    0x4d908e, // blue-green
    0x577590, // blue
    0x277da1, // blue-purple
  ];
  return `#${(
    COLORS[Math.floor(Math.random() * COLORS.length)] - 0x111111
  ).toString(16)}`;
}

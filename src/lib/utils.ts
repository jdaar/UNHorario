/**
 * Generates a random color from the COLORS array
 * @since 0.0.3
 * @internal
 */
export function getRandomColor(): string {
    const COLORS = [
    "#f94144", // red
    "#f3722c", // orange
    "#f8961e", // yellow
    "#f9844a", // yellow-orange
    "#f9c74f", // yellow-green
    "#90be6d", // green
    "#43aa8b", // green-blue
    "#4d908e", // blue-green
    "#577590", // blue
    "#277da1", // blue-purple
    ];
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}
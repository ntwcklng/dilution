export default function dilution({
  part1,
  part2,
  bottle
}: {
  part1?: number;
  part2?: number;
  bottle?: number;
}) {
  if (!part1 || !part2 || !bottle) {
    throw new Error("Please specify values");
  }
  if (part1 === part2) {
    part1 = 1;
    part2 = 1;
  }
  const newResult1 = Math.round(bottle / (part1 + part2)).toFixed(2);
  const newResult2 = Math.round((bottle / (part1 + part2)) * part2).toFixed(2);
  return {
    part1: newResult1.slice(0, newResult1.length - 3),
    part2: newResult2.slice(0, newResult2.length - 3)
  };
}

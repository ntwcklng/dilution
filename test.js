import test from "ava";
import dilution from "./";

test(t => {
  t.deepEqual(dilution({ part1: 1, part2: 2, bottle: 500 }), {
    part1: "167",
    part2: "333"
  });
  t.deepEqual(dilution({ part1: 2, part2: 2, bottle: 500 }), {
    part1: "250",
    part2: "250"
  });
  t.throws(() => dilution({ part1: 0, part2: 2, bottle: 500 }));
  t.throws(() => dilution({ part1: 1, part2: 0, bottle: 500 }));
  t.throws(() => dilution({ part1: 0, part2: 0, bottle: 0 }));
  t.throws(() => dilution({ part1: "a", part2: 0, bottle: 0 }));
});

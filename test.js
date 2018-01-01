import test from 'ava'
import dilution from './'

test(t => {
  t.deepEqual(dilution(1, 2, 500), { part1: '167', part2: '333' })
  t.deepEqual(dilution(2, 2, 500), { part1: '250', part2: '250' })
  t.throws(() => dilution(0, 2, 500))
  t.throws(() => dilution(1, 0, 500))
  t.throws(() => dilution(0, 0, 0))
  t.throws(() => dilution('a', 0, 0))
})

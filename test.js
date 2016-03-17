import test from 'ava'
import superspeed from './'

test('nothing', (t) => {
  t.ok(Number.isNaN(superspeed()))
})

test('only time', (t) => {
  t.ok(Number.isNaN(superspeed({
    time: 3600000
  })))
})

test('only distance', (t) => {
  t.ok(Number.isNaN(superspeed({
    distance: 5000
  })))
})

test('km/h', (t) => {
  t.is(superspeed({
    time: 3600000,
    distance: 5000
  }), 5)
})

test('mi/h', (t) => {
  t.is(superspeed({
    time: 3600000,
    distance: 5000,
    metric: false
  }), 3.1068559611866697)
})

test('km/min', (t) => {
  t.is(superspeed({
    time: 3600000,
    distance: 5000,
    timeDivider: 60000
  }), 0.08333333333333333)
})

test('m/h', (t) => {
  t.is(superspeed({
    time: 3600000,
    distance: 5000,
    distanceDivider: 1
  }), 5000)
})

test('m/s', (t) => {
  t.is(superspeed({
    time: 3600000,
    distance: 5000,
    timeDivider: 1000,
    distanceDivider: 1
  }), 1.3888888888888888)
})

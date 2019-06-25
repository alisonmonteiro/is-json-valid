import test from 'ava'
import m from '.'

test('invalid params', t => {
  t.is(m([]), false)
  t.is(m(2), false)
  t.is(m('2'), false)
  t.is(m({}), false)
  t.is(m(null), false)
  t.is(m(undefined), false)
  t.is(m(true), false)
  t.is(m(false), false)
  t.is(m(''), false)
})

test('objects validation', t => {
  const example = {
    xo: true,
    ava: true,
    coverage: 100
  }

  t.is(m(example), false)
  t.is(m(null, {allowObjects: true}), false)
  t.is(m(example, {allowObjects: true}), true)
})

test('json validation', t => {
  const valid = `{
    "xo": true,
    "ava": true,
    "coverage": 100,
    "choose": ["npm", "yarn"]
  }`

  const invalid = `{
    xo: true,
    "ava": true,
    "coverage": 100
  }`

  t.is(m(valid), true)
  t.is(m(valid, {allowObjects: true}), true)

  t.is(m(invalid), false)
})

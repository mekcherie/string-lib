const sl = require('./index.js');

test('Capitalize', () => {
  expect(sl.capitalize('capitalize')).toBe('Capitalize')
})

test('Capitalize Words', () => {
  expect(sl.capitalizeWords('capitalize')).toBe('CAPITALIZE')
})

test('Capitalize Headline', () => {
  expect(sl.capitalizeHeadline('capitalize headline')).toBe('Capitalize Headline')
})

test('Remove Extra Spaces', () => {
  expect(sl.removeExtraSpaces('   remove   extra   spaces   ')).toBe('remove extra spaces')
})

test('kebobCase', () => {
  expect(sl.kebobCase('kebob case')).toBe('kebob-case')
})

test('snakeCase', () => {
  expect(sl.snakeCase('snake case')).toBe('snake_case')
})

test('camelCase', () => {
  expect(sl.camelCase('camel case')).toBe('camelCase')
})

test('shift', () => {
  expect(sl.shift('shift')).toBe('hifts')
})

test('makeHashTag', () => {
  expect(sl.makeHashTag('hashtag')).toBe('#HASHTAG')
})

test('isEmpty', () => {
  expect(sl.isEmpty('empty')).toBe(false)
})
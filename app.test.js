const { getGreeting } = require('./app');

test('getGreeting возвращает корректную строку', () => {
  expect(getGreeting('Ana')).toBe('Hello, Ana!');
});

test('getGreeting по умолчанию использует World', () => {
  expect(getGreeting()).toBe('Hello, World!');
});

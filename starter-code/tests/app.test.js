const { add, subtract, multiply, divide, greet, capitalize, isPalindrome } = require('../src/app')

describe('Math functions', () => {
  test('add: sums two numbers', () => {
    expect(add(2, 3)).toBe(5)
    expect(add(-1, 1)).toBe(0)
    expect(add(0, 0)).toBe(0)
  })

  test('subtract: subtracts two numbers', () => {
    expect(subtract(5, 2)).toBe(3)
    expect(subtract(0, 5)).toBe(-5)
  })

  test('multiply: multiplies two numbers', () => {
    expect(multiply(3, 4)).toBe(12)
    expect(multiply(-2, 3)).toBe(-6)
    expect(multiply(0, 100)).toBe(0)
  })

  test('divide: divides two numbers', () => {
    expect(divide(10, 2)).toBe(5)
    expect(divide(7, 2)).toBe(3.5)
  })

  test('divide: throws on division by zero', () => {
    expect(() => divide(1, 0)).toThrow('Division by zero')
  })
})

describe('String functions', () => {
  test('greet: returns greeting with name', () => {
    expect(greet('Alice')).toBe('Hello, Alice!')
    expect(greet('World')).toBe('Hello, World!')
  })

  test('greet: returns default greeting without name', () => {
    expect(greet()).toBe('Hello, World!')
    expect(greet('')).toBe('Hello, World!')
  })

  test('capitalize: capitalizes first letter', () => {
    expect(capitalize('hello')).toBe('Hello')
    expect(capitalize('WORLD')).toBe('World')
  })

  test('capitalize: handles edge cases', () => {
    expect(capitalize('')).toBe('')
    expect(capitalize(42)).toBe(42)
  })

  test('isPalindrome: detects palindromes', () => {
    expect(isPalindrome('racecar')).toBe(true)
    expect(isPalindrome('A man a plan a canal Panama')).toBe(true)
    expect(isPalindrome('hello')).toBe(false)
  })
})

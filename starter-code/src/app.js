/**
 * Simple utility module — this is what you'll build the CI/CD pipeline for.
 * You do NOT need to modify this file.
 */

function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  if (b === 0) throw new Error('Division by zero')
  return a / b
}

function greet(name) {
  if (!name) return 'Hello, World!'
  return `Hello, ${name}!`
}

function capitalize(str) {
  if (typeof str !== 'string' || str.length === 0) return str
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '')
  return clean === clean.split('').reverse().join('')
}

module.exports = { add, subtract, multiply, divide, greet, capitalize, isPalindrome }

export function exercise01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    input.slice()
    result.push(currentElement)
    
  }
  return result.join("")
}

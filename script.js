export function exercise01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement != "e" && currentElement !="E")
    result.push(currentElement)
  }
  console.log(result.join(""))
  return result.join("")
}
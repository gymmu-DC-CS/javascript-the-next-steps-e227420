export function exercise01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement != "e" && currentElement != "E")
      result.push(currentElement)
  }
  console.log(result.join(""))
  return result.join("")
}
export function exercise02(args) {
  return args.toUpperCase()
}
export function exercise03(args) {
  const input = args
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === "e") {
      count = count + 1
    } else if (currentElement === "E") {
      count = count + 1
    }
  }
  return count
}

export function exercise04(args) {
  const input = args
  let count = 0

  for (let i = 1; i < input.length; i++) {
    const currentElement = input[i]
    const previousElement = input[i - 1]

    if (currentElement === " " && previousElement != "-") {
      count = count + 1
    }
  }
  return count + 1
}

export function exercise05(args) {
  const input = args

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (
      currentElement.charCodeAt() >= 65 &&
      currentElement.charCodeAt() <= 90
    ) {
      return true
    }
  }
  return false
}

export function exercise06(args) {
  const input = args.toUpperCase()

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (
      (currentElement.charCodeAt() < 65 || currentElement.charCodeAt() > 90) &&
      currentElement.charCodeAt() != 32
    ) {
      return true
    }
  }
  return false
}

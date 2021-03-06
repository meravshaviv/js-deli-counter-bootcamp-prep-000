function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var current = line[0]
    line.shift()
    return `Currently serving ${current}.`
  }
}

function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  else {
    var linePrint = []
    var i = 0
    while (i < line.length) {
      linePrint.push(`${i + 1}. ${line[i]}`)
      i++
    }
    return `The line is currently: ${linePrint.join(', ')}`
  }
}

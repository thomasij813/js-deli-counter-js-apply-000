function takeANumber(currentLine, newCustomerName) {
  currentLine.push(newCustomerName)
  return `Welcome, ${newCustomerName}. You are number ${currentLine.length} in line.`
}

function nowServing(currentLine) {
  if (currentLine.length === 0) {
    return 'There is nobody waiting to be served!'
  }
}
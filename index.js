function takeANumber(currentLine, newCustomerName) {
  currentLine.push(newCustomerName)
  return `Welcome, ${newCustomerName}. You are number ${currentLine.length} in line.`
}
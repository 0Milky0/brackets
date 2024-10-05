function check(str, bracketsConfig) {
  let openBracket = []
  let bracketsConfigCopy = bracketsConfig.flat()

  for(let i = 0; i < str.length; i++) {
    let bracket = str[i]
    let index = bracketsConfigCopy.indexOf(bracket)
  
    if(index == -1) return false

    if(index % 2 == 0) { 
      if (bracketsConfigCopy[index] == bracketsConfigCopy[index + 1] && openBracket[openBracket.length - 1] == bracketsConfigCopy[index + 1]) {
        let lastBracket = openBracket.pop()
				if (lastBracket != bracketsConfigCopy[index]) return false
			} else {
        openBracket.push(bracket)  
      }
    }
    else {
      let lastBracket = openBracket.pop()
      if (lastBracket != bracketsConfigCopy[index - 1]) return false
    }
  }

  if(openBracket.length == 0) {
    return true
  }
  else {
    return false
  }
}

module.exports = check

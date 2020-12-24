function telephoneCheck(str) {
    let dashes = /^\d{3}-\d{3}-\d{4}$/.test(str)
    let bracketsDash = /^\(\d{3}\)\d{3}-\d{4}$/.test(str)
    let bracketsSpaceDash = /^\(\d{3}\)\s\d{3}-\d{4}$/.test(str)
    let spaces = /^\d{3}\s\d{3}\s\d{4}$/.test(str)
    let whole = /^\d{10}$/.test(str)
    let oneDashes = /^1\s*\d{3}-\d{3}-\d{4}$/.test(str)
    let onebracketsDash = /^1\s*\(\d{3}\)\d{3}-\d{4}$/.test(str)
    let onebracketsSpaceDash = /^1\s*\(\d{3}\)\s\d{3}-\d{4}$/.test(str)
    let onespaces = /^1\s*\d{3}\s\d{3}\s\d{4}$/.test(str)
    let onewhole = /^1\s*\d{10}$/.test(str)
  
  
    if (dashes || bracketsDash || bracketsSpaceDash || spaces || whole | oneDashes || onebracketsDash || onebracketsSpaceDash || onespaces || onewhole) {
      return true
    } else {
      return false
    }
    
  }
  
  telephoneCheck("555-555-5555");
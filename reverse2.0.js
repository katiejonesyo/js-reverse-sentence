const string = "string long with more words"

function reverse(string) {
  let revStr = ''

  for(let char of string) {
    revStr = char + revStr
  }

  return revStr
}

// also

reverse(string)

function revWithMethods(string) {

  return string
    .split(' ')
    .reverse()
    .join(' ')
}

  revWithMethods('katie yo whats up')

//   To make it reverse letters instead of words just make line 20 and line 22 into a single character 
//   and not two characters/spaces.
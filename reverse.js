let strRev = function(str, start, end) {
    if(!str || str.length < 2) {
    return;
    }

// If no string or strength length is less than 2 then return nothing.
    while (start < end) {
    let temp = str[start];
    str = str.substr(0, start) + str[end] + str.substr(start + str[end].length);
    str = str.substr(0, end) + temp + str.substr(end + temp.length);

    start++;
    end--;
        }

return str;
}
//BUT if start is less than end then return the string.

let reverseWords = function(sentence) {
    if (!sentence || sentence.length === 0) {
        return;
    }
//here is where the sentence is null so it ends with 0

  // To reverse all words in the string, we will first reverse
  // the string. Now all the words are in the desired location, but
  // in reverse order: "Hello World" -> "dlroW olleH".

  let strLen = sentence.length;
  sentence = strRev(sentence, 0, strLen - 1);

  // Now, let's iterate the sentence and reverse each word in place.
  // "dlroW olleH" -> "World Hello"
  let start = 0;
  let end = 0;

  while(true) {
      //find start of index of a word while skipping spaces
    while (sentence[start] === ' ') {
        start++;
    }
    if (start >= sentence.length) {
        break;
    }
    // find the end of the index of the word
    end = start + 1;
    while (end < sentence.length && sentence[end] != ' ') {
        end++;
    }


    //reverse the word in-place
    sentence = strRev(sentence, start, end - 1);

    start = end;
  }
  return sentence;
};


let stringToReverse1 = "Hello World!"
let stringToReverseResult1 = reverseWords(stringToReverse1);
let stringToReverseExpect1 = 'World! Hello';
console.log(stringToReverse1);
console.log(stringToReverseResult1);



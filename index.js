"use strict"

//Shift Cipher program which supports both the alphabet cases, default shift is 3 (Caesar Cipher)

const upperAlphabets = [
  'A', 'B', 'C', 'D', 'E', 'F',
  'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z'
]


const lowerAlphabets = [
  'a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x',
  'y', 'z'
]


function encrypt(string, shift = 3) {

  let splittedString = string.split("")
  splittedString.forEach((element, i) => {

    if (element != " " && (element.toUpperCase() === element)) {

      splittedString.splice(i, 1, upperAlphabets[(upperAlphabets.indexOf(element) + shift) % 26])

    }


    if (element != " " && (element.toLowerCase() === element)) {

      splittedString.splice(i, 1, lowerAlphabets[(lowerAlphabets.indexOf(element) + shift) % 26])

    }


  })

  return splittedString.join("")

}

console.log(encrypt("Shone Binu"))
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
  splittedString.forEach(element => {

    let index = upperAlphabets.indexOf(element)
    splittedString.splice(index, 1, upperAlphabets[index + shift])

  })

  return splittedString.join("")

}
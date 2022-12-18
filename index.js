"use strict"

//ShiftCipher
function mod(n, m) {
  return ((n % m) + m) % m;
}

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


function decrypt(string, shift = 3) {

  let splittedString = string.split("")
  splittedString.forEach((element, i) => {

    if (upperAlphabets.includes(element)) {

      splittedString.splice(i, 1, upperAlphabets[mod((upperAlphabets.indexOf(element) - shift), 26)])

    } else if (lowerAlphabets.includes(element)) {

      splittedString.splice(i, 1, lowerAlphabets[mod((lowerAlphabets.indexOf(element) - shift), 26)])

    }

  })

  return splittedString.join("")

}


const textBox = document.querySelector("#textbox")
const encryptButton = document.querySelector(".enc")
const decryptButton = document.querySelector(".dec")
const shiftInput = document.querySelector("#shiftinput")

encryptButton.addEventListener("click", () => {
  textBox.value = encrypt(textBox.value, shiftInput.valueAsNumber)
})

decryptButton.addEventListener("click", () => {
  textBox.value = decrypt(textBox.value, shiftInput.valueAsNumber)
})
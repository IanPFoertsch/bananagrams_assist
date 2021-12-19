function letter_count(letter_set) {
  var count = letter_set.reduce((count_set, letter) => {
    if (letter in count_set) {
      count_set[letter] += 1
    } else {
      count_set[letter] = 1
    }
    return count_set
  }, {})

  return count
}


function is_word_within_letter_set(word, letter_set) {

  word_letter_count = letter_count(word)
  for (const key of Object.keys(word_letter_count)) {

    if (
      (letter_set[key] === undefined) ||
      (word_letter_count[key] > letter_set[key])
    ) {

      return false
    }
  }
  return true
}

function generateUpdateLetterSetFunction(input_box) {
  var dictionary = [
    "cat",
    "hat",
    "mat",
    "scat",
    "boop",
    "snoot",
    "scoop",
    "poop"
  ]

  dictionary.sort((a, b) => a.length - b.length)

  //for each word, if letter count is within our count of letters, add it to our solution set
  function updateLetterSet() {
    var letter_set = letter_count(input_box.value.toLowerCase().split(""))
    console.log(dictionary)
    dictionary.forEach((word) => {
      if (is_word_within_letter_set(word.split(""), letter_set)) {
        console.log("Found word in letter set!", word)
      }
    })
  }

  return updateLetterSet
}

function main() {
  var input_box = document.getElementsByName("letterset_input")[0]
  input_box.addEventListener('keyup', generateUpdateLetterSetFunction(input_box))
}

main();

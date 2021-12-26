import  CONFIG  from './words.js'
import { WordTableManager } from './word_table_manager.js'

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

  var word_letter_count = letter_count(word)
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

function generateWordMatchSetFunction(input_box, word_table_manager) {

  CONFIG.words.sort((a, b) => a.length - b.length)

  //for each word, if letter count is within our count of letters, add it to our solution set
  function updateWordTable() {
    console.log("called")
    var letter_set = letter_count(input_box.value.toLowerCase().split(""))
    var word_set = []
    CONFIG.words.forEach((word) => {
      if (is_word_within_letter_set(word.split(""), letter_set)) {
        word_set.push(word)
      }
    })
    console.log(word_table_manager)
    word_table_manager.update(word_set)
  }
  return updateWordTable
}

function main() {
  var input_box = document.getElementsByName("letterset_input")[0]

  var word_table_manager = new WordTableManager(document.getElementsByName("wordset_results")[0])

  input_box.addEventListener('keyup', generateWordMatchSetFunction(input_box, word_table_manager))
}

main();

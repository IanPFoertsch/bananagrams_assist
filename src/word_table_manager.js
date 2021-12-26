
// import { } from ""

class WordTableManager {
  constructor(words_table) {
    this.words_table = words_table
  }

  update(word_set) {
    console.log("updating")
    //what's our existing word set?
    //word by longest word, most rare letters first
    this.words_table.innerHTML = "";
    word_set.forEach((word) => {
      var row = this.words_table.insertRow(0)
      row.innerHTML = word
    })
  }
}

export { WordTableManager }
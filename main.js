const text = document.querySelector('#poem');
const button = document.querySelector('button');
const result = document.querySelector('#result');

button.addEventListener('click', getResult);

function getResult() {
  const firstLetter = text.value
    .toLowerCase()
    .match(/\w+/g)
    .map((word) => getFirstUniqueLetter(word))
    .join('');

result.innerText = getFirstUniqueLetter(firstLetter);
}

function getFirstUniqueLetter(word) {
  for (i = 0; i < word.length; i++) {
    const letter = word[i];
    const without = '' + word.substring(0, i) + word.substring(i + 1);
    // console.log(i, letter, without, without.includes(letter));
    if (!without.includes(letter)) {
      return letter;
    }
  }
}

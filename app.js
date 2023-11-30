const handleSubmit = function () {
  let word = document.getElementById("word").value;
  let wordLength = word.length;
  let listWord = document.createElement("li");
  
  listWord.innerText = word;

  if (wordLength % 2 === 0) {
    document.getElementById("even").appendChild(listWord);
  } else if (wordLength % 2 === 1) {
    document.getElementById("odd").appendChild(listWord);
  } else {
    console.log("please enter valid word");
  }
};
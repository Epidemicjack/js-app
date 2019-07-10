function getdata(id) {
    return document.getElementById(id).value;
  }
  
  function checker(wordArray) {
    // if any word in the word array is "" (empty), return false
    if (wordArray.some(word => word.length === 0)) return false;
    return true;
  }
  
  function writeResult(result) {
    // find textarea, write contents
    document.getElementById("output1").textContent = result;
  }
  
  // bouton clickable
  const button = document.getElementById("submit");
  button.onclick = function WriteResult() {
    var mot1 = getdata('i0');
    var mot2 = getdata('i1');
    var words = [mot1, mot2];
    if (checker(words)) {
      writeResult(mot1 + mot2);
    } else alert("Fais un effort mon pote")
  }
  


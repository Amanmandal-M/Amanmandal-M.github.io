document.querySelector("#resume").addEventListener("click", () => {
  downloadAndViewFile(
    "https://drive.google.com/file/d/1lyYfuQk3gqFDxPVYotKnOvk06lADgI8h/view"
  );
});
function downloadAndViewFile(fileURL) {
  const link = document.createElement("a");
  link.href = fileURL;
  link.download = "file.pdf";
  link.target = "_blank";
  link.click();
}

//  LETTERS APPEND

function append() {
  var text = "I'm Aman Kumar";
  var i = 0;
  document.getElementById("user-detail-name").innerHTML=""
  setInterval(() => {
    if (text[i] == undefined) {
      return;
    }
    document.getElementById("user-detail-name").innerHTML += text[i];
    i++;
  }, 150);
}

function append2() {
    var text = "Node.js Backend Developer";
    var i = 0;
    document.getElementById("user-detail-intro").innerHTML=""
    setInterval(() => {
      if (text[i] == undefined) {
        return;
      }
      document.getElementById("user-detail-intro").innerHTML += text[i];
      i++;
    }, 150);
}

append();
append2();

setInterval(()=>{
    append();
    append2();
},7000)


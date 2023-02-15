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
var data1;
function append() {
  var text = "I'm Aman Kumar...";
  var i = 0;
  document.getElementById("user-detail-name").innerHTML=""
  append2();
    data1 = setInterval(() => {
    if (text[i] == undefined) {
        return clearInterval(data1);
    }
    document.getElementById("user-detail-name").innerHTML += text[i];
    i++;
  }, 200);
}
var data2;
function append2() {
    var text = "Backend Developer";
    var i = 0;
    document.getElementById("user-detail-intro").innerHTML=""
      data2 = setInterval(() => {
      if (text[i] == undefined) {
        return clearInterval(data2);
      }
      document.getElementById("user-detail-intro").innerHTML += text[i];
      i++;
    }, 200);
}

append();
setTimeout(()=>{
  append();
},6000)

setTimeout(()=>{
   clearInterval(data1);
   clearInterval(data2);
},12000)


//auto refresh

function AutoRefresh( t ) {
  setTimeout("location.reload(true);", t);
}


// ================== PROJECT SECTION =================

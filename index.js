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
  var text = "I'm Aman Kumar...";
  var i = 0;
  document.getElementById("user-detail-name").innerHTML=""
  append2();
  let data1 = setInterval(() => {
    if (text[i] == undefined) {
        return clearInterval(data1);
    }
    document.getElementById("user-detail-name").innerHTML += text[i];
    i++;
  }, 200);
}

function append2() {
    var text = "Backend Developer";
    var i = 0;
    document.getElementById("user-detail-intro").innerHTML=""
    let data1 = setInterval(() => {
      if (text[i] == undefined) {
        return clearInterval(data1);
      }
      document.getElementById("user-detail-intro").innerHTML += text[i];
      i++;
    }, 200);
}

append();


var maindata = setInterval(()=>{
    append();
},4000)

setTimeout(() => {
    clearInterval(maindata);
    console.log("yes")
}, 10000);


//auto refresh

function AutoRefresh( t ) {
  console.log("yes")
  setTimeout("location.reload(true);", t);
}
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


  var ImageChange = document.getElementsByClassName(".ImageSection").innerHTML;

  let ImgArr = [
    "./Images/C1.png",
    "./Images/C2.png",
    "./Images/C3.png",
    "./Images/C4.png",
    "./Images/C5.png",
    "./Images/C6.png",
    "./Images/C7.png",
    "./Images/C8.png",
    "./Images/C9.png",
    "./Images/C10.png",
    "./Images/C11.png",
    "./Images/C12.png",
    "./Images/C13.png",
  ]

let i=0;
let data ;
setInterval(()=>{
    document.querySelector(".pr_img").src="";
    document.querySelector(".pr_img").src=ImgArr[i];
    i++;
    data=i;
    if(data>=13){
      i=0;
    }
},3000)
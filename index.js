let sidemenu=document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}


document.querySelector("#resume-link-1").addEventListener("click", () => {
  downloadAndViewFile(
    "https://drive.google.com/file/d/1lyYfuQk3gqFDxPVYotKnOvk06lADgI8h/view"
  );
});
function downloadAndViewFile(fileURL) {
  const link = document.createElement("a");
  link.href = fileURL;
  link.target = "_blank";
  link.click();
}
  
  document.getElementById('resume-link-2').addEventListener("click",()=>{
    // console.log("OPENinig.....")
    window.location.assign("https://drive.google.com/file/d/1lyYfuQk3gqFDxPVYotKnOvk06lADgI8h/view?usp=share_link", "_blank");
  })
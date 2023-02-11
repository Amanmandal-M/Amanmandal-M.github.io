document.querySelector("#resume").addEventListener("click", ()=>{
    downloadAndViewFile("https://drive.google.com/file/d/1lyYfuQk3gqFDxPVYotKnOvk06lADgI8h/view");
})
function downloadAndViewFile(fileURL) {
    const link = document.createElement("a");
    link.href = fileURL;
    link.download = "file.pdf";
    link.target = "_blank";
    link.click();
}
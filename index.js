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
  document.getElementById("user-detail-name").innerHTML = "";
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
  document.getElementById("user-detail-intro").innerHTML = "";
  data2 = setInterval(() => {
    if (text[i] == undefined) {
      return clearInterval(data2);
    }
    document.getElementById("user-detail-intro").innerHTML += text[i];
    i++;
  }, 200);
}

append();
setTimeout(() => {
  append();
}, 6000);

setTimeout(() => {
  clearInterval(data1);
  clearInterval(data2);
}, 12000);

//auto refresh

function AutoRefresh(t) {
  setTimeout("location.reload(true);", t);
}

// ================== PROJECT SECTION =================


// ================== Image Slider =================

// C1-C14
var d1 ;
function ImageSlider1() {
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
  ];

  let i = 0;
  let data;
  d1 = setInterval(() => {
    document.querySelector(".pr_img").src = ImgArr[i];
    i++;
    data = i;
    if (data >= 13) {
      i = 0;
    }
  }, 4000);
}

// D1-D10
var d2;
function ImageSlider2() {
  let ImgArr = [
    "./Images/D1.png",
    "./Images/D2.png",
    "./Images/D3.png",
    "./Images/D4.png",
    "./Images/D5.png",
    "./Images/D6.png",
    "./Images/D7.png",
    "./Images/D8.png",
    "./Images/D9.png",
    "./Images/D10.png",
  ];

  let i = 0;
  let data;
  d2 = setInterval(() => {
    document.querySelector(".pr_img").src = ImgArr[i];
    i++;
    data = i;
    if (data >= 10) {
      i = 0;
    }
  }, 4000);
}

// E1-E11
var d3;
function ImageSlider3() {
  let ImgArr = [
    "./Images/E1.png",
    "./Images/E2.png",
    "./Images/E3.png",
    "./Images/E4.png",
    "./Images/E5.png",
    "./Images/E6.png",
    "./Images/E7.png",
    "./Images/E8.png",
    "./Images/E9.png",
    "./Images/E10.png",
    "./Images/E11.png"
  ];

  let i = 0;
  let data;
  d3 = setInterval(() => {
    document.querySelector(".pr_img").src = ImgArr[i];
    i++;
    data = i;
    if (data >= 11) {
      i = 0;
    }
  }, 4000);
}

//  ======================= Globally Image Changes =========================

let i=0;

if(i==0){
  clearInterval(d1)
  clearInterval(d3)
  ImageSlider1()
}else if(i==1){
  clearInterval(d1)
  clearInterval(d2)
  ImageSlider2()
}else{
  clearInterval(d2)
  clearInterval(d3)
  ImageSlider3()
}


// ======================= Right click =========================

let RightBtn = document.querySelector("#RightButton");

RightBtn.addEventListener("click", (e) => {
  let DivArr = [
    `<div id="SmallContainer2">
                <div id="Details">             <!-- Flex -->
                    <!-- Image Section -->
                    <div class="ImageSection" id="imgsec">
                        <img src="./Images/D1.png" class="pr_img" alt="Project Image">
                    </div>
                    <!-- Details Section -->
                    <div class="SmallDetails"> <!-- Grid -->
                        <div class="project-title">
                           <p class="sephora">INDIA-MART-CLONE</p>
                        </div>
                        <div class="project-description">
                          <p>
                          It's an e-commerce website where users can buy any kind of
                          products.                          
                            <br>
                            <br>
                          Built the Admin Page
                            <br>
                          Developed Admin authentication
                            <br>
                          Developed all CRUD Operations
                            <br>
                          </p>
                        </div>
                        <div class="project-tech-stack">
                           <p>
                            <b>Tech Stack-</b> 
                            <br>
                            <br>
                            HTML | CSS | Java Script | NodeJS | ExpressJS | MongoDB
                           </p>
                           <br>
                           <b>Individual project built in 5 days.</b>
                        </div>
                    </div>
                </div>
                <div id="ButtonsSection">      <!-- Flex -->
                    <a href="https://github.com/Amanmandal-M/haloed-ground-8588" class="project-github-link" target="_blank">
                        <img src="https://th.bing.com/th/id/OIP.kjCUP06WDUMR88i5wo2SqwHaHa?w=217&h=217&c=7&r=0&o=5&pid=1.7" width="40px" height="40px"  alt="Github">
                        <p>GitHub</p>
                    </a>
                    <a href="https://wonderful-tulumba-b2af93.netlify.app/" class="project-deployed-link" target="_blank">
                        <img src="https://th.bing.com/th/id/OIP.leF49bHcGiMnWVeERCqGbAHaHa?pid=ImgDet&rs=1" width="40px" height="40px" alt="Deployed Link">
                        <p>Deployed Link</p>
                    </a>
                    <a href="https://drive.google.com/file/d/1MbQ0iA8Bz7PPCgKOjGvBg8skjxciryZT/view?usp=share_link" class="project-deployed-link" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/3049/3049365.png" width="40px" height="40px" alt="Deployed Link">
                        <p>Live Video</p>
                    </a>
                </div>
     </div>`,
    `<div id="SmallContainer2">
                <div id="Details">             <!-- Flex -->
                    <!-- Image Section -->
                    <div class="ImageSection" id="imgsec">
                        <img src="./Images/E1.png" class="pr_img" alt="Project Image">
                    </div>
                    <!-- Details Section -->
                    <div class="SmallDetails"> <!-- Grid -->
                        <div class="project-title">
                           <p class="sephora">SKIN-STORE-CLONE</p>
                        </div>
                        <div class="project-description">
                          <p>
                            Skin Store Website consists of Beauty Products .In this Website users can purchase all beauty products.
                            <br>
                            <br>
                          </p>
                        </div>
                        <div class="project-tech-stack">
                           <p>
                            <b>Tech Stack-</b> 
                            <br>
                            <br>
                            HTML | CSS | Java Script
                           </p>
                           <br>
                           <b>Individual project built in 5 days.</b>
                        </div>
                    </div>
                </div>
                <div id="ButtonsSection">      <!-- Flex -->
                    <a href="https://github.com/Amanmandal-M/windy-value-6337" class="project-github-link" target="_blank">
                        <img src="https://th.bing.com/th/id/OIP.kjCUP06WDUMR88i5wo2SqwHaHa?w=217&h=217&c=7&r=0&o=5&pid=1.7" width="40px" height="40px"  alt="Github">
                        <p>GitHub</p>
                    </a>
                    <a href="https://velvety-lebkuchen-951016.netlify.app/" class="project-deployed-link" target="_blank">
                        <img src="https://th.bing.com/th/id/OIP.leF49bHcGiMnWVeERCqGbAHaHa?pid=ImgDet&rs=1" width="40px" height="40px" alt="Deployed Link">
                        <p>Deployed Link</p>
                    </a>
                    <a href="https://drive.google.com/file/d/1DjBM9uQtqx7swobInnDUcWh0UCxggcIL/view?usp=share_link" class="project-deployed-link" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/3049/3049365.png" width="40px" height="40px" alt="Deployed Link">
                        <p>Live Video</p>
                    </a>
                </div>
     </div>`,
    `<div id="SmallContainer2">
     <div id="Details">             <!-- Flex -->
         <!-- Image Section -->
         <div class="ImageSection" id="imgsec">
             <img src="./Images/C1.png" class="pr_img" alt="Project Image">
         </div>
         <!-- Details Section -->
         <div class="SmallDetails"> <!-- Grid -->
             <div class="project-title">
                <p class="sephora">SEPHORA-CLONE</p>
             </div>
             <div class="project-description">
               <p>
                 It's an e-commerce website where users can buy Beauty
                 Products like skin care, fragrance, hair care, etc.
                 <br>
                 <br>
               Built the Admin Page
                 <br>
               Developed Admin authentication
                 <br>
               Developed all CRUD Operations
                 <br>
               </p>
             </div>
             <div class="project-tech-stack">
                <p>
                 <b>Tech Stack-</b> 
                 <br>
                 <br>
                 HTML | CSS | Java Script
                </p>
                <br>
                <b>A collaborative project built by a team of 5 members in 6 days.</b>
             </div>
         </div>
     </div>
     <div id="ButtonsSection">      <!-- Flex -->
         <a href="https://github.com/Amanmandal-M/Sephora-Clone" class="project-github-link" target="_blank">
             <img src="https://th.bing.com/th/id/OIP.kjCUP06WDUMR88i5wo2SqwHaHa?w=217&h=217&c=7&r=0&o=5&pid=1.7" width="40px" height="40px"  alt="Github">
             <p>GitHub</p>
         </a>
         <a href="https://timely-wisp-f8d982.netlify.app/" class="project-deployed-link" target="_blank">
             <img src="https://th.bing.com/th/id/OIP.leF49bHcGiMnWVeERCqGbAHaHa?pid=ImgDet&rs=1" width="40px" height="40px" alt="Deployed Link">
             <p>Deployed Link</p>
         </a>
         <a href="https://drive.google.com/file/d/1MbQ0iA8Bz7PPCgKOjGvBg8skjxciryZT/view" class="project-deployed-link" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/3049/3049365.png" width="40px" height="40px" alt="Deployed Link">
            <p>Live Video</p>
         </a>
     </div>
      </div>`,
  ];
  document.querySelector("#SmallContainer1").innerHTML = "";
  document.querySelector("#SmallContainer1").innerHTML = DivArr[i];

  if(i==0){
    clearInterval(d1)
    clearInterval(d3)
    ImageSlider2()
  }else if(i==1){
    clearInterval(d1)
    clearInterval(d2)
    ImageSlider3()
  }else{
    clearInterval(d2)
    clearInterval(d3)
    ImageSlider1()
  }

  i++;

  if(i>2){
    i=0;
  }

  
});



// // ======================= Left click =========================

let j=i;

let LeftBtn = document.querySelector("#leftButton");

LeftBtn.addEventListener("click", (e) => {
  let DivArr = [
    `<div id="SmallContainer2">
                <div id="Details">             <!-- Flex -->
                    <!-- Image Section -->
                    <div class="ImageSection" id="imgsec">
                        <img src="./Images/D1.png" class="pr_img" alt="Project Image">
                    </div>
                    <!-- Details Section -->
                    <div class="SmallDetails"> <!-- Grid -->
                        <div class="project-title">
                           <p class="sephora">INDIA-MART-CLONE</p>
                        </div>
                        <div class="project-description">
                          <p>
                          It's an e-commerce website where users can buy any kind of
                          products.                          
                            <br>
                            <br>
                          Built the Admin Page
                            <br>
                          Developed Admin authentication
                            <br>
                          Developed all CRUD Operations
                            <br>
                          </p>
                        </div>
                        <div class="project-tech-stack">
                           <p>
                            <b>Tech Stack-</b> 
                            <br>
                            <br>
                            HTML | CSS | Java Script | NodeJS | ExpressJS | MongoDB
                           </p>
                           <br>
                           <b>Individual project built in 5 days.</b>
                        </div>
                    </div>
                </div>
                <div id="ButtonsSection">      <!-- Flex -->
                    <a href="https://github.com/Amanmandal-M/haloed-ground-8588" class="project-github-link" target="_blank">
                        <img src="https://th.bing.com/th/id/OIP.kjCUP06WDUMR88i5wo2SqwHaHa?w=217&h=217&c=7&r=0&o=5&pid=1.7" width="40px" height="40px"  alt="Github">
                        <p>GitHub</p>
                    </a>
                    <a href="https://wonderful-tulumba-b2af93.netlify.app/" class="project-deployed-link" target="_blank">
                        <img src="https://th.bing.com/th/id/OIP.leF49bHcGiMnWVeERCqGbAHaHa?pid=ImgDet&rs=1" width="40px" height="40px" alt="Deployed Link">
                        <p>Deployed Link</p>
                    </a>
                    <a href="https://drive.google.com/file/d/1MbQ0iA8Bz7PPCgKOjGvBg8skjxciryZT/view?usp=share_link" class="project-deployed-link" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/3049/3049365.png" width="40px" height="40px" alt="Deployed Link">
                        <p>Live Video</p>
                    </a>
                </div>
     </div>`,
    `<div id="SmallContainer2">
                <div id="Details">             <!-- Flex -->
                    <!-- Image Section -->
                    <div class="ImageSection" id="imgsec">
                        <img src="./Images/E1.png" class="pr_img" alt="Project Image">
                    </div>
                    <!-- Details Section -->
                    <div class="SmallDetails"> <!-- Grid -->
                        <div class="project-title">
                           <p class="sephora">SKIN-STORE-CLONE</p>
                        </div>
                        <div class="project-description">
                          <p>
                            Skin Store Website consists of Beauty Products .In this Website users can purchase all beauty products.
                            <br>
                            <br>
                          </p>
                        </div>
                        <div class="project-tech-stack">
                           <p>
                            <b>Tech Stack-</b> 
                            <br>
                            <br>
                            HTML | CSS | Java Script
                           </p>
                           <br>
                           <b>Individual project built in 5 days.</b>
                        </div>
                    </div>
                </div>
                <div id="ButtonsSection">      <!-- Flex -->
                    <a href="https://github.com/Amanmandal-M/windy-value-6337" class="project-github-link" target="_blank">
                        <img src="https://th.bing.com/th/id/OIP.kjCUP06WDUMR88i5wo2SqwHaHa?w=217&h=217&c=7&r=0&o=5&pid=1.7" width="40px" height="40px"  alt="Github">
                        <p>GitHub</p>
                    </a>
                    <a href="https://velvety-lebkuchen-951016.netlify.app/" class="project-deployed-link" target="_blank">
                        <img src="https://th.bing.com/th/id/OIP.leF49bHcGiMnWVeERCqGbAHaHa?pid=ImgDet&rs=1" width="40px" height="40px" alt="Deployed Link">
                        <p>Deployed Link</p>
                    </a>
                    <a href="https://drive.google.com/file/d/1DjBM9uQtqx7swobInnDUcWh0UCxggcIL/view?usp=share_link" class="project-deployed-link" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/3049/3049365.png" width="40px" height="40px" alt="Deployed Link">
                        <p>Live Video</p>
                    </a>
                </div>
     </div>`,
    `<div id="SmallContainer2">
     <div id="Details">             <!-- Flex -->
         <!-- Image Section -->
         <div class="ImageSection" id="imgsec">
             <img src="./Images/C1.png" class="pr_img" alt="Project Image">
         </div>
         <!-- Details Section -->
         <div class="SmallDetails"> <!-- Grid -->
             <div class="project-title">
                <p class="sephora">SEPHORA-CLONE</p>
             </div>
             <div class="project-description">
               <p>
                 It's an e-commerce website where users can buy Beauty
                 Products like skin care, fragrance, hair care, etc.
                 <br>
                 <br>
               Built the Admin Page
                 <br>
               Developed Admin authentication
                 <br>
               Developed all CRUD Operations
                 <br>
               </p>
             </div>
             <div class="project-tech-stack">
                <p>
                 <b>Tech Stack-</b> 
                 <br>
                 <br>
                 HTML | CSS | Java Script
                </p>
                <br>
                <b>A collaborative project built by a team of 5 members in 6 days.</b>
             </div>
         </div>
     </div>
     <div id="ButtonsSection">      <!-- Flex -->
         <a href="https://github.com/Amanmandal-M/Sephora-Clone" class="project-github-link" target="_blank">
             <img src="https://th.bing.com/th/id/OIP.kjCUP06WDUMR88i5wo2SqwHaHa?w=217&h=217&c=7&r=0&o=5&pid=1.7" width="40px" height="40px"  alt="Github">
             <p>GitHub</p>
         </a>
         <a href="https://timely-wisp-f8d982.netlify.app/" class="project-deployed-link" target="_blank">
             <img src="https://th.bing.com/th/id/OIP.leF49bHcGiMnWVeERCqGbAHaHa?pid=ImgDet&rs=1" width="40px" height="40px" alt="Deployed Link">
             <p>Deployed Link</p>
         </a>
         <a href="https://drive.google.com/file/d/1MbQ0iA8Bz7PPCgKOjGvBg8skjxciryZT/view" class="project-deployed-link" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/3049/3049365.png" width="40px" height="40px" alt="Deployed Link">
            <p>Live Video</p>
         </a>
     </div>
      </div>`
  ];
  document.querySelector("#SmallContainer1").innerHTML = "";
  document.querySelector("#SmallContainer1").innerHTML = DivArr[j];

  if(j==0){
    clearInterval(d1)
    clearInterval(d3)
    ImageSlider2()
  }else if(j==1){
    clearInterval(d1)
    clearInterval(d2)
    ImageSlider3()
  }else{
    clearInterval(d2)
    clearInterval(d3)
    ImageSlider1()
  }

  j++;

  if(j<0 || j>2){
    j=i;
  }

  
});
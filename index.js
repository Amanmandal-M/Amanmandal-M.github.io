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
var d1;
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
    "./Images/E11.png",
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

// // F1-F7
// var d4;
// function ImageSlider4() {
//   let ImgArr = [
//     "./Images/F1.png",
//     "./Images/F2.png",
//     "./Images/F3.png",
//     "./Images/E4.png",
//     "./Images/F5.png",
//     "./Images/F6.png",
//     "./Images/F7.png"
//   ];

//   let i = 0;
//   let data;
//   d4 = setInterval(() => {
//     document.querySelector(".pr_img").src = ImgArr[i];
//     i++;
//     data = i;
//     if (data >= 7) {
//       i = 0;
//     }
//   }, 4000);
// }

//  ======================= Globally Image Changes =========================

let i = 0;

if (i == 0) {
  clearInterval(d1);
  clearInterval(d3);
  ImageSlider1();
} else if (i == 1) {
  clearInterval(d1);
  clearInterval(d2);
  ImageSlider2();
} else {
  clearInterval(d2);
  clearInterval(d3);
  ImageSlider3();
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
         <a href="https://drive.google.com/file/d/1qPziEyuUgVjih2R1leX86D3oPxgHViEc/view" class="project-deployed-link" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/3049/3049365.png" width="40px" height="40px" alt="Deployed Link">
            <p>Live Video</p>
         </a>
     </div>
      </div>`,
  ];
  document.querySelector("#SmallContainer1").innerHTML = "";
  document.querySelector("#SmallContainer1").innerHTML = DivArr[i];

  if (i == 0) {
    clearInterval(d1);
    clearInterval(d3);
    ImageSlider2();
  } else if (i == 1) {
    clearInterval(d1);
    clearInterval(d2);
    ImageSlider3();
  } else {
    clearInterval(d2);
    clearInterval(d3);
    ImageSlider1();
  }

  i++;

  if (i > 2) {
    i = 0;
  }
});

// // ======================= Left click =========================

let j = i;

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
      </div>`,
  ];
  document.querySelector("#SmallContainer1").innerHTML = "";
  document.querySelector("#SmallContainer1").innerHTML = DivArr[j];

  if (j == 0) {
    clearInterval(d1);
    clearInterval(d3);
    ImageSlider2();
  } else if (j == 1) {
    clearInterval(d1);
    clearInterval(d2);
    ImageSlider3();
  } else {
    clearInterval(d2);
    clearInterval(d3);
    ImageSlider1();
  }

  j++;

  if (j < 0 || j > 2) {
    j = i;
  }
});

// ============= Contact Section =============

// =========== PHONE =============

let ViewButton = document.querySelector("#ViewBtn");
let MainAnchor = document.querySelector(".SmallAnc");

ViewButton.addEventListener("click", () => {
  MainAnchor.innerHTML = "";
  MainAnchor.innerHTML = `
  <div>Phone</div>
  <img src="https://dejpknyizje2n.cloudfront.net/svgcustom/clipart/preview/telephone-2572-13835-300x300.png" width="40px" height="40px" alt="Github">
  <a href="tel:+91-7004565094" rel="noreferrer" target="_blank" id="contact-phone" font-size: 15px;">+91-7004565094</a>
  `;
});

// =========== EMAIL =============

let ViewButton2 = document.querySelector("#ViewBtn2");
let MainAnchor2 = document.querySelector("#SmallAnc2");

ViewButton2.addEventListener("click", () => {
  MainAnchor2.innerHTML = "";
  MainAnchor2.innerHTML = `
  <div>Email</div>
  <img src="https://th.bing.com/th/id/R.3a5a64ffc3965f939226962d056e9fd6?rik=6tgagpS2WlYs9w&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2010%2f01%2fsimple-email-icon-vector-free_129913.png&ehk=b2UTfuLjT4nCGQqvfjAp4xkbdYmkzPt5NNHcOSd%2fF%2fM%3d&risl=&pid=ImgRaw&r=0" width="40px" height="40px" alt="Github">
  <a href="mailto:amanmandal644@gmail.com" rel="noreferrer" target="_blank" id="contact-email" font-size: 15px;>amanmandal644@gmail.com</a>
  `;
});

// =========== GITHUB =============

let ViewButton3 = document.querySelector("#ViewBtn3");
let MainAnchor3 = document.querySelector("#SmallAnc3");

ViewButton3.addEventListener("click", () => {
  MainAnchor3.innerHTML = "";
  MainAnchor3.innerHTML = `
  <div>Github</div>
  <img src="https://cdn.afterdawn.fi/v3/news/original/github-logo.png" width="40px" height="40px" alt="Github">
  <a href="https://github.com/Amanmandal-M" target="_blank" id="contact-github" font-size: 15px;>Amanmandal-M</a>
  `;
});

// =========== LINKEDIN =============

let ViewButton4 = document.querySelector("#ViewBtn4");
let MainAnchor4 = document.querySelector("#SmallAnc4");

ViewButton4.addEventListener("click", () => {
  MainAnchor4.innerHTML = "";
  MainAnchor4.innerHTML = `
  <div>LinkedIn</div>
  <img src="https://sguru.org/wp-content/uploads/2018/02/linkedin-png-linkedin-icon-1600.png" width="40px" height="40px" alt="Github">
  <a href="https://www.linkedin.com/in/aman-kumar-657080101/" target="_blank" id="contact-linkedin" font-size: 15px;>Aman Kumar</a>
  `;
});


// =========== LOCATION =============

let ViewButton5 = document.querySelector("#ViewBtn5");
let MainAnchor5 = document.querySelector("#SmallAnc5");

ViewButton5.addEventListener("click", () => {
  MainAnchor5.innerHTML = "";
  MainAnchor5.innerHTML = `
  <div>Location</div>
  <a href="https://www.google.co.in/maps/place/23.746890,86.156104/@23.7475956,86.1572614,17.89z/data=!4m6!3m5!1s0x39f418c23ffdbfa9:0x7ebdbf3c5aeac30f!7e2!8m2!3d23.7468887!4d86.1561048" target="_blank"><img src="https://static.vecteezy.com/system/resources/previews/000/437/977/original/vector-location-icon.jpg" width="40px" height="40px" alt="Github"></a>
  <a href="https://www.google.co.in/maps/place/23.746890,86.156104/@23.7475956,86.1572614,17.89z/data=!4m6!3m5!1s0x39f418c23ffdbfa9:0x7ebdbf3c5aeac30f!7e2!8m2!3d23.7468887!4d86.1561048" target="_blank" id="contact-location" font-size: 15px;>View Location</a>
  `;
});
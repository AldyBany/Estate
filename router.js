


function getContent(hashTag, callback) {

    var pages = {
        home: `<home-content></home-content>`,
        about: ``,
        contact: ``,
        services: ``,
        contact: ``
        // 404: ``
    }

    return callback(pages[hashTag])

}

function loadContent() {
    var appContent = document.getElementById('app'),
        hashTag = location.hash.substr(1)

    getContent(hashTag, function (content) {
        appContent.innerHTML = content
    })

    document.title = hashTag.toUpperCase()

}


if (!location.hash) {
    location.hash = "#home"
}



loadContent()



window.addEventListener('hashchange', loadContent)

var instance = M.Carousel.init({
    fullWidth: true,
    indicators: true
});





// const showMenu = (toggleId, navId) => {
//     const toggle = document.getElementById(toggleId),
//         nav = document.getElementById(navId);

//     if (toggle && nav) {
//         toggle.addEventListener("click", () => {
//             console.log(4)
//             nav.classList.toggle("show");
//         })
//     }
// }
// showMenu("navToggle", "menu");


// // remove menu moblie

// const navLink = document.querySelectorAll(".nav-link");

// function linkAction() {
//     navLink.forEach(n => n.classList.remove("active"))
//     this.classList.add("active")

//     const navMenu = document.getElementById("menu-toggle")
//     navMenu.classList.remove("show")
// }
// navLink.forEach(n => n.addEventListener("click", linkAction))


// console.log(1)
// var m = document.getElementById('navToggle')

// m.addEventListener('click', () => {
//     console.log(2)
// })



// import { template } from './sidebar.js'


// function getContent(FragId, callback) {

//   // const about = document.getElementById('about')
//   var pages = {
//     home: `<home-content class="text"></home-content>`,
//     about: ` 
//       <sidebar-content>
//         <h1>Hello</h1>
//       </sidebar-content>


//       <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
//           <div class="carousel-inner">
//             <div class="carousel-item active">
//                 <img src="..." class="d-block w-100" alt="...">
//             </div>
//             <div class="carousel-item">
//               <img src="..." class="d-block w-100" alt="...">
//             </div>
//             <div class="carousel-item">
//               <img src="..." class="d-block w-100" alt="...">
//             </div>
//           </div>
//         </div>

//    `,
//     contact: `
//       <sidebar-content>
//         <h1>Hello Contact</h1>




//       `
//   };

//   callback(pages[FragId]);
// }



// function loadContent() {
//   var contentDiv = document.getElementById("app"),
//     FragId = location.hash.substr(1);
//   getContent(FragId, function (content) {
//     contentDiv.innerHTML = content;
//   });
//   document.title = FragId.toUpperCase()
// };

// if (!location.hash) {
//   location.hash = "#home";
// }
// loadContent();

// window.addEventListener("hashchange", loadContent);




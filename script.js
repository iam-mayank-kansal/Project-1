// navbar icons sec ------------------------------------------------------------------------------------------------------------------------------

const IT_nav_icons_a = document.querySelectorAll(".it-nav-icons-sec-images a");
const IT_nav_icons_p = document.querySelectorAll(".it-nav-icons-sec-images a p");
const social_links = ["Github", "Linkden", "Instagram", "Twitter", "Whatsapp"]
let min_500 = window.matchMedia("(min-width: 500px)");
if (min_500.matches) {

    let timeout;
    let currentHoveredIndex = -1; // Initialize to a value that won't match any icon index

    IT_nav_icons_a.forEach((box, x) => {

        box.addEventListener("mouseover", () => {
            if (currentHoveredIndex !== -1) { // If there is a currently hovered icon
                IT_nav_icons_p[currentHoveredIndex].style.opacity = "0"; // Hide the text of the previously hovered icon
                IT_nav_icons_p[currentHoveredIndex].innerText = ""; // Clear the text
            }
            clearTimeout(timeout); // Clear any existing timeout
            IT_nav_icons_p[x].style.opacity = "1"; // Show the text of the hovered icon
            IT_nav_icons_p[x].innerText = social_links[x];
            currentHoveredIndex = x; // Update the currently hovered index
        });

        box.addEventListener("mouseout", () => {
            timeout = setTimeout(() => {
                IT_nav_icons_p[x].style.opacity = "0"; // Hide the text after a delay
                setTimeout(() => {
                    IT_nav_icons_p[x].innerText = ""; // Clear the text after the animation ends
                }, 300); // Adjust the duration based on your CSS transition timing
            }, 300); // Adjust the delay time as needed
        });

    });

}









// navbar --------------------------------------------------------------------------------------------------------------------------------------

const navbar_bar = document.querySelector(".it-navbar-sec-bars");
const navbar_cross = document.querySelector(".it-navbar-sec-cross");
const navbar_links_slider = document.querySelector(".it-navbar-sec-links");
const navbar = document.querySelector(".it-navbar-sec");
const navbar_links = document.querySelectorAll(".it-navbar-sec-links li a")


navbar_bar.addEventListener("click", () => {
    navbar_links_slider.setAttribute("style", "top:102%");
    navbar_bar.style.display = "none";
    navbar_cross.style.display = "block";
})
navbar_cross.addEventListener("click", () => {
    navbar_links_slider.setAttribute("style", "top:-400%");
    navbar_cross.style.display = "none";
    navbar_bar.style.display = "block";

})

window.addEventListener("scroll", (e) => {
    if (scrollY > 600) {
        navbar.setAttribute("style", "position:fixed ; top:0px;     background: linear-gradient(to left, var(--dark-blue), var(--dark-blue) 10%, var(--purple) 75%, var(--purple) 75%); width:100vw;  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.214);");

    }
    else if (scrollY > 150) {
        navbar.setAttribute("style", "position:sticky ; top:-1px;     background: linear-gradient(to left, var(--dark-blue), var(--dark-blue) 10%, var(--purple) 75%, var(--purple) 75%); width:100vw;  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.214);");

    }

    else {
        navbar.setAttribute("style", "position:sticky; box-shadow:0px");

    }

})






// service ---------------------------------------------------------------------------------------------------------------------------------------

const service_item = document.querySelectorAll(".it-service-sec-items");
const service_img = document.querySelectorAll(".it-service-sec-img")
const service_h1 = document.querySelectorAll(".it-service-sec-rotated-text")
const service_p = document.querySelectorAll(".it-service-sec-rotated-para")
const service_btn = document.querySelectorAll(".it-service-sec-btn")
const service_temp = document.querySelectorAll(".it-service-sec-justshow");
service_temp[2].style.opacity="0";
service_item.forEach((box, x) => {
    box.addEventListener("mouseover", () => {
        service_item.forEach((boxin, y) => {
            boxin.setAttribute("style", "width:100px");
            service_temp[y].setAttribute("style","opacity:1");
        });
        box.setAttribute("style", "width:800px");
        service_temp[x].setAttribute("style","opacity:0");

    })
});


// function animateService(x) {
//     clearTimeout();

//     service_item.forEach((boxin, y) => {
//         setTimeout(() => {
//             service_img[y].setAttribute("style", "transform:scale(0)");
//             service_h1[y].setAttribute("style", "display:none");
//             service_p[y].setAttribute("style", "display:none");
//             service_btn[y].setAttribute("style", "transform:translateY(200px)");
//         }, 100);
//     });
//     setTimeout(() => {
//         service_img[x].setAttribute("style", "transform:scale(1)");
//         service_h1[x].setAttribute("style", "display:block");
//         service_p[x].setAttribute("style", "display:block");
//         service_btn[x].setAttribute("style", "transform:translateY(0)");
//     }, 700);
//     service_index = x;
// }

// service_item.forEach((box, x) => {
//     box.addEventListener("mouseover", () => {
//         if (service_index != x) {
//             animateService(x);
//         }
//     });
// });



service_img[2].style.transform = "scale(1)";
service_h1[2].setAttribute("style","width:100%; display:block");
service_p[2].style.display = "block";
service_btn[2].style.transform = "translateY(0)";
let service_index = 2;
let isAnimating = false;

function animateService(x) {
    if (isAnimating || service_index === x) return;

    isAnimating = true;
    clearTimeout();

    service_img.forEach((img, index) => {
        if (index === x) {
            setTimeout(() => {
                img.style.transform = "scale(1)";
                service_h1[index].setAttribute("style","width:100%; display:block");

                service_p[index].style.display = "block";
                service_btn[index].style.transform = "translateY(0)";
                isAnimating = false;
            }, 650);
        } else {
            img.style.transform = "scale(0)";
            service_h1[index].setAttribute("style","width:fit-content; display:none");
            service_p[index].style.display = "none";
            service_btn[index].style.transform = "translateY(200px)";
        }
    });

    service_index = x;
}

service_item.forEach((box, x) => {
    box.addEventListener("mouseover", () => {
        animateService(x);
    });
});

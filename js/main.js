let menu_btn = document.querySelector(".menu_btn");
let header_btn = document.querySelector(".header_btn");
let menu = document.querySelector(".menu");

menu_btn.onclick = () => {
    header_btn.classList.remove("main_btn");
    menu.classList.toggle("active");
}
// 
let show_arrows = document.querySelectorAll(".show_arrow");
let quests = document.querySelectorAll(".quest");
let answers = document.querySelectorAll(".answer");

// console.log(show_arrows,answers);
quests.forEach((quest, index) => {
    quest.addEventListener('click', () => {
answers[index].classList.toggle("active");
show_arrows[index].classList.toggle("fa-angle-down");
show_arrows[index].classList.toggle("fa-angle-up");
    })
})
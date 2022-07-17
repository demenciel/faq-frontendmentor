let answer = document.querySelectorAll(".faq");
let question = document.querySelectorAll(".faq");

answer.forEach((event) => {
    event.addEventListener('click', () => {
        if(event.classList.contains("active")) {
            event.classList.remove("active");
        } else {
            event.classList.add("active");
        }
    })

})







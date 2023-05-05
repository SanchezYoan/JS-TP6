const form = document.querySelector("form");
let doing = "";

toDo.addEventListener("input", (e) => {
    doing = e.target.value;
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(e);

    document.querySelector("form > ul").innerHTML = `
    <li>${doing}</li>`
        

})
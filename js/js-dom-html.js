// JS DOM Methods

// const sayHi = () => {
//     inputText = document.getElementById('username').value;
//     document.getElementById('output').innerText = `Hi ${inputText}!`;
// };


document.getElementById("submit").addEventListener("click", function () {
    const name = document.getElementById("username").value;
    const output = document.getElementById("output");
    output.textContent = `Hi ${name}!`;
});
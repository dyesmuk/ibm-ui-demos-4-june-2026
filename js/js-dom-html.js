// // JS DOM Methods

// // const sayHi = () => {
// //     inputText = document.getElementById('username').value;
// //     document.getElementById('output').innerText = `Hi ${inputText}!`;
// // };

// // document.getElementById("element-to-capture")
// // .addEventListener(arg1, arg2);
// // .addEventListener('event-to-capture', () => {function-to-execute-on-that-event});

// document.getElementById("submit").addEventListener("click", function () {
//     const name = document.getElementById("username").value;
//     const output = document.getElementById("output");
//     output.textContent = `Hi ${name}!`;
// });


document.getElementById("submit").addEventListener("click", function () {
    const name = document.getElementById("username").value;
    const output = document.getElementById("output");
    // output.textContent = `Hi ${name}!`;
    // alert(`Hi ${name}!`);
    output.textContent = confirm("Are you sure?") ? 'Yes' : 'No';
});












document.getElementById("action").addEventListener("click", function () {
    
    const email = document.getElementById("exampleFormControlInput1").value;
    const message = document.getElementById("exampleFormControlTextarea1").value;

    if (email.trim() === "" || message.trim() === "") {
        alert("Please fill all fields!");
        return;
    }
    if (!email.includes("@") || !email.includes(".")) {
        alert("Enter a valid email!");
        return;
    }

    console.log("Email:", email);
    console.log("Message:", message);

    alert("Message sent successfully!");

    document.getElementById("exampleFormControlInput1").value = "";
    document.getElementById("exampleFormControlTextarea1").value = "";
});
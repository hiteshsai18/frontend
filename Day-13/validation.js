function addNum(a,b){
    console.log(a+b)
}
addNum(10,20)
addNum(100,20)

//Events - onclick, onsubmit.
//addEventListener('event',function)

//DOM

/*document.getElementById('btn').addEventListener('click',
function() {
    console.log("Message arrived");
    alert('Dashboard opened');
})
document.getElementById('one').innerHTML='Heading from JavaScript'
document.getElementById('para').innerHTML='Paragraph from JavaScript'*/

/*document.getElementById('myForm').addEventListener('submit',
function (e){
    e.preventDefault();
    //console.log("Form Submitted successfully");
    // alert("Form Submitted successfully");
    var username=document.getElementById('username').value;
    alert(username);
})*/

document.getElementById('myForm').addEventListener('submit',function(e){
    e.preventDefault();
    var username= document.forms['myForm']['username'].value;
    var usernameRegex=/^[a-zA-Z0-9]{3,}$/;
    if (!usernameRegex.test(username)){
        alert('Invalid username');
        return false;
    }
    alert("Form submitted successfully");
    return true;
})
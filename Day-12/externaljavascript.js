var a=10;
console.log(a);

//Primitive datatypes

var a=100;    //number
console.log(a);
console.log(typeof(a));

var a=100.9;    //number
console.log(a);
console.log(typeof(a));

var a='frontend';    //string
console.log(a);
console.log(typeof(a));

var a=true;    //boolean
console.log(a);
console.log(typeof(a));

var a=null;    //object
console.log(a);
console.log(typeof(a));

var b;    //undefined
console.log(b);
console.log(typeof(b));

var c=263482737843247293n;    //bigint
console.log(c);
console.log(typeof(c));

//Non-Primitive datatypes

//Array

var usernames=["Hitesh","Sai","Kundan","Nikki"];
console.log(usernames);
console.log(usernames[1],usernames[10]);
console.log(usernames.pop());
console.log(usernames);
console.log(usernames.push("goldilocks"));
console.log(usernames);

//Object (dictionary)

var student={
    username:"Hitesh",
    Country:"India",
    Course:"Full Stack"
}
console.log(student);

console.log(student.username);
console.log(student["Country"]);

var syllabus=[
    {
        id:1,
        course:"MBBS"
    },
    {
        id:2,
        course:"B.arch"
    },
    {
        id:3,
        course:"UPSC"
    },
    {
        id:4,
        course:"PhD"
    }
]

console.log(syllabus[2].course)
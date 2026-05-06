//advanced arrow function

/*const userdetails=()=>({
    Id:1,
    username:"Kundan",
    place:"Africa",
    disease:"Malaria"
})
console.log(userdetails());*/

//...sprea operators
//merge
//copy
//to avoid mutate orders

//copying of an array into a new array

/*let arr=[10,20,4,5,70];
console.log(arr);
let arr1=[...arr];
console.log(arr1);

let obj={
    id:1,
    state:"Jharkand",
    country:"India"
}

let obj1={...obj};
console.log(obj1);

//merge

let even=[2,4,6,8,10];
let odd=[1,3,5,7,9];
let squares=[4,9,16,25,36,49];
let total=[...even,...odd,...squares];
console.log(total)*/

/*let ob={
    id:1,
    name:"saagar",
    occupation:"door knocker"
}

let ob1={
    sno:2,
    idname:"kavyaa",
    hobby:"door opener"
}

let ob2={...ob,...ob1};
console.log(ob2)*/

//if the two objects have same keys then the second mentioned one in let ob2={...ob,...ob1} will be the output and if the two 
//objects have different keys then all the 6 pairs will be merged into one object mixing them missing the order. 

/*let ob={
    id:1,
    name:"saagar",
    occupation:"door knocker"
}

let ob1={
    id:2,
    name:"kavyaa",
    occupation:"door opener"
}

let ob2=[{...ob},{...ob1}];
console.log(ob2)*/

const products = [
    {
        id: 1,
        p_name: "Laptop",
        p_price: "90000",
        p_img: "https://m.media-amazon.com/images/I/71K-77wHn2L._AC_UY327_FMwebp_QL65_.jpg"
    },
    {
        id: 2,
        p_name: "AC",
        p_price: "50000",
        p_img: "https://m.media-amazon.com/images/I/51jajOmpujL._AC_UY327_FMwebp_QL65_.jpg"
    },
    {
        id: 3,
        p_name: "Dyson Airwrap",
        p_price: "45000",
        p_img: "https://m.media-amazon.com/images/I/61l5KkEytnL._AC_UL480_FMwebp_QL65_.jpg"
    },
    {
        id: 4,
        p_name: "Tank bags",
        p_price: "4000",
        p_img: "https://m.media-amazon.com/images/I/618yS0yGpVL._AC_UL480_FMwebp_QL65_.jpg"
    }
];

container.innerHTML = products.map((value, index) => {
    return `
        <div style="border:1px solid red">
            <img src="${value.p_img}" width="20%"/>
            <h1>${value.p_name}</h1>
            <h3>${value.p_price}</h3>
            <button onclick="addToCart(${index})">Add to cart</button>
        </div>
    `;
}).join("");

let cart = [];

function addToCart(index) {
    cart = [...cart, products[index]];
    console.log(cart);
}
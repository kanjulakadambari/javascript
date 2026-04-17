//const users = [
   // {

    //id: 1,
    //name: "user1",
    //loc: "hyd"
    //},
    //{
        //id: 2,
        //name: "user2",
        //loc: "hyder"
    //},

//]

//console.log(users[1].loc);

/*function myFun(a , b) {
    console.log(a+b);
    //return a+b;
}
//console.log(myFun);
console.log(myFun(10 , 20));*/



/*const myFun = function(num1 , num2) {
    return num1+num2;
}
console.log(myFun(10,30));*/

/*function domath( num1, num2, operation) {
    switch(operation){
        case "*":
        return num1*num2;
        case "+":
        return num1+num2;
        case "/":
        return num1/num2;
        case "-":
        return num1-num2;

    }
    console.log(domath(10,20 ,"+"));

}*/


/*let name = "kadambari";
let age = "22";

console.log("my name is"+ name+". she is "+ age);//type 1
console.log(`my name is ${name}. she is ${age}`);//type 2*/

/*let buchi = document.getElementById("buchi");

buchi.innerText = "<b>hello</b>";
buchi.innerHTML = "<b>hello</b>";*/


/*let boxes = document.getElementsByClassName("box");
let para = document.getElementsByClassName("para");

// it will print box 1, box 2 ,box 3//

boxes[1].innerHTML ="KADA";

// it will print box 1, KADA, box 3//

para[0].innerHTML ="hey";*/

// Events

/*const myFun = () => {
    console.log("hello");
};*/


/*const myFun = () => {
    let display = document.getElementById("display")
    display.innerHTML = "bye" // this change to hello to bye only one time
    display.innerHTML = display.innerHTML === "hello" ? "bye" : "hello" //this change many times hello to bye


    if(display.innerHTML === "hello") {
    display.style.color = "darkblue"
    }
    else {
        display.style.color = "red"
    }

}*/

/*let isShow = true
const myFun = () => {

    let display = document.getElementById("display")

    if(isShow) {
        display.src = "https://wallup.net/wp-content/uploads/2016/01/186050-lion-animals.jpg"
        isShow = !isShow
    }
    else {
        display.src = "https://tse4.mm.bing.net/th/id/OIP.ubwBIfs0I_XeI62cmaBONAHaE8?pid=Api&P=0&h=180"
        isShow = !isShow
    }
}*/

/*const add = () => {
    event.preventDefault()
    let val1 = Number(document.getElementById("value1").value);
    let val2 = Number(document.getElementById("value2").value);
    let display = document.getElementById("display")

    display.innerHTML = `the sum of ${val1} and ${val2} is ${val1 + val2}`
}
const sub = () => {
    event.preventDefault()
    let val1 = Number(document.getElementById("value1").value);
    let val2 = Number(document.getElementById("value2").value);
    let display = document.getElementById("display")
    display.innerHTML = `the diff of ${val1} and ${val2} is ${val1 - val2}`
}
const multi = () => {
    event.preventDefault()
    let val1 = Number(document.getElementById("value1").value);
    let val2 = Number(document.getElementById("value2").value);
    let display = document.getElementById("display")
    display.innerHTML = `the multi of ${val1} and ${val2} is ${val1 * val2}`
}*/

const changeColor = () => {
    let display = document.getElementById("display")
    let color = "#"
    let colorCodes = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f' ]

    for(let i=0; i<6; i++){
        let randomo = Math.floor(Math.random()*16)
        color += colorCodes[randomo]

        display.style.backgroundColor =color
    }
}

changeColor()







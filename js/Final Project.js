
let num1 = document.getElementById("count-1")
let num2 = document.getElementById("count-2")
let num3 = document.getElementById("count-3")
let num4 = document.getElementById("count-4")


function animated (elment, start, end, duration) {
    let range = end-start;
    let current = start ;
    let increment =0 ;
    if (end > start) {
        increment = 1;
    }
    else {
        increment = -1;
    }
    let timer = setInterval(function(){
        current +=increment;
        elment.textContent =current;
        if (current == end) {
            clearInterval(timer);
        }
    } ,duration)
}

animated (num1 , 1 ,5143,0.1)
animated (num2 , 1 ,691,10)
animated (num3 , 1 ,10180,0.01)
animated (num4 , 1 ,76,60)




let btnTop =document.getElementById("topBtn")

window.onscroll = function() {
    if (document.documentElement.scrollTop > 700){
        btnTop.style.display = "block";
    }
    else {
        btnTop.style.display = "none";
    }
}

btnTop.addEventListener("click" , function (){
    window.scroll({
        top:0,
        left:0,
        behavior:'smooth'
    })
})


// let mo11 = document.getElementById("mo1")
// let mo22 = document.getElementById("mo2")


let count = 0;

document.getElementById("mo2").onclick = function(){
    count+=1
    document.getElementById("mo1").innerHTML = count;
}



// function myFunction() {
//     document.getElementById("mo1").innerHTML = 1
// }

// for (let i=0;i<100000 ; i++) {
//     function myFunction() {
//         document.getElementById("mo1").innerHTML = 1+i
//     }
// }
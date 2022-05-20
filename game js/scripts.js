var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var btn = document.getElementById('btn');
var h1 = document.getElementById('h1');
var h3 = document.getElementById('h3');
var h4 = document.getElementById('h4');

button1.style.display = "none";
button2.style.display = "none";
button3.style.display = "none"; 
btn.addEventListener('click', function(){
    btn.style.display = "none"
    h1.innerHTML = "Start"
    h3.style.display = "none"
    h4.innerHTML = "Who's The Big ?"
    button1.style.display = "inline-block"
    button2.style.display = "inline-block"
    button3.style.display = "inline-block"
})






button1.addEventListener('click',function(){
    button1.style.backgroundColor="green"
    h4.innerText= "wath is this ?"
    button2.innerText = "div"
    button3.innerText = "P"

    window.scrollTo(450,450)
    // alert('good')
})
button2.addEventListener('click',function(){
    button2.style.backgroundColor="red"
    // alert('try again')
})
button3.addEventListener('click',function(){
    button3.style.backgroundColor="red"

    // alert('try again')
})
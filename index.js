var winner=0;
function check() {
    if (document.getElementById('a').innerHTML !== '.' && 
        document.getElementById('a').innerHTML === document.getElementById('b').innerHTML && 
        document.getElementById('b').innerHTML === document.getElementById('c').innerHTML &&
        document.getElementById('c').innerHTML !== '.') {
        if (t === 0) {
            alert("Ist person wins");
        } else {
            alert("2nd person wins");
        }
        document.getElementById('table').innerText=""
        return;
    }
    else 
    if (document.getElementById('d').innerHTML !== '.' && 
        document.getElementById('d').innerHTML === document.getElementById('e').innerHTML && 
        document.getElementById('e').innerHTML === document.getElementById('f').innerHTML &&
        document.getElementById('f').innerHTML !== '.') {
        if (t === 0) {
            alert("Ist person wins");
        } else {
            alert("2nd person wins");

        }
       document.getElementById('table').innerText="";
        return;
    }
    else if (document.getElementById('g').innerHTML !== '.' && 
        document.getElementById('g').innerHTML === document.getElementById('h').innerHTML && 
        document.getElementById('h').innerHTML === document.getElementById('i').innerHTML &&
        document.getElementById('i').innerHTML !== '.') {
        if (t === 0) {
            alert("Ist person wins");
        } else {
            alert("2nd person wins");
        }
        document.getElementById('table').innerText="";
        return;
    }
    else if (document.getElementById('a').innerHTML !== '.' && 
        document.getElementById('a').innerHTML === document.getElementById('d').innerHTML && 
        document.getElementById('d').innerHTML === document.getElementById('g').innerHTML &&
        document.getElementById('g').innerHTML !== '.') {
        if (t === 0) {
            alert("Ist person wins");
        } else {
            alert("2nd person wins");
        }
        document.getElementById('table').innerText="";
        return;
    }
    else if (document.getElementById('b').innerHTML !== '.' && 
        document.getElementById('b').innerHTML === document.getElementById('e').innerHTML && 
        document.getElementById('e').innerHTML === document.getElementById('h').innerHTML &&
        document.getElementById('h').innerHTML !== '.') {
        if (t === 0) {
            alert("Ist person wins");
        } else {
            alert("2nd person wins");
        }
        document.getElementById('table').innerText="";
        return;
    }
    else if (document.getElementById('c').innerHTML !== '.' && 
        document.getElementById('c').innerHTML === document.getElementById('f').innerHTML && 
        document.getElementById('f').innerHTML === document.getElementById('i').innerHTML &&
        document.getElementById('i').innerHTML !== '.') {
        if (t === 0) {
            alert("Ist person wins");
        } else {
            alert("2nd person wins");
        }
        document.getElementById('table').innerText="";
        return;
    }
    else if (document.getElementById('a').innerHTML !== '.' && 
        document.getElementById('a').innerHTML === document.getElementById('e').innerHTML && 
        document.getElementById('e').innerHTML === document.getElementById('i').innerHTML &&
        document.getElementById('i').innerHTML !== '.') {
        if (t === 0) {
            alert("Ist person wins");
        } else {
            alert("2nd person wins");
        }
        document.getElementById('table').innerText="";
        return;
    }
    else if (document.getElementById('c').innerHTML !== '.' && 
        document.getElementById('c').innerHTML === document.getElementById('e').innerHTML && 
        document.getElementById('e').innerHTML === document.getElementById('g').innerHTML &&
        document.getElementById('g').innerHTML !== '.') {
        if (t === 0) {
            alert("Ist person wins");
        } else {
            alert("2nd person wins");
        }
        document.getElementById('table').innerText="";
        return;
    }
    else{
    return;
}
}



var t = 0,count=0;

var a = document.getElementById("a").addEventListener('click', function name() {
    if (t === 0) {
        if(document.getElementById("a").innerText ==='.'){
        document.getElementById("a").innerHTML = "<img src='circle.png' style='width:70px; height:70px;' alt='circle'>";
        check()
        t = t + 1;
        
        }
    } else if(t===1){
        if(document.getElementById("a").innerText ==='.'){
        document.getElementById("a").innerHTML = "<img src='cross.png' style='width:70px; height:70px;' alt='cross'>";
        check()
        t = t - 1;
        
        }
    }
    
});

var b = document.getElementById("b").addEventListener('click', function name() {
    if (t === 0) {
        if(document.getElementById("b").innerText ==='.'){
        document.getElementById("b").innerHTML = "<img src='circle.png' style='width:70px; height:70px;' alt='circle'>";
        check()
        t = t + 1;
        
        }
    } else {
        if(document.getElementById("b").innerText ==='.'){
        document.getElementById("b").innerHTML = "<img src='cross.png' style='width:70px; height:70px;' alt='cross'>";
        check()
        t = t - 1;
        
        }
    }
    
});

// Repeat the pattern for the rest of the elements...
var c = document.getElementById("c").addEventListener('click', function name() {
    if (t === 0) {
        if(document.getElementById("c").innerText ==='.'){
        document.getElementById("c").innerHTML = "<img src='circle.png' style='width:70px; height:70px;' alt='circle'>";
        check()
        t = t + 1;
       
        }
    } else {
        if(document.getElementById("c").innerText ==='.'){
        document.getElementById("c").innerHTML = "<img src='cross.png' style='width:70px; height:70px;' alt='cross'>";
        check()
        t = t - 1;
        
        }
    }
    
});

var d = document.getElementById("d").addEventListener('click', function name() {
    if (t === 0) {
        if(document.getElementById("d").innerText ==='.'){
        document.getElementById("d").innerHTML = "<img src='circle.png' style='width:70px; height:70px;' alt='circle'>";
        check()
        t = t + 1;
        
        }
    } else {
        if(document.getElementById("d").innerText ==='.'){
        document.getElementById("d").innerHTML = "<img src='cross.png' style='width:70px; height:70px;' alt='cross'>";
        check();
        t = t - 1;
        
        }
    }
    
});

var e = document.getElementById("e").addEventListener('click', function name() {
    if (t === 0) {
        if(document.getElementById("e").innerText ==='.'){
        document.getElementById("e").innerHTML = "<img src='circle.png' style='width:70px; height:70px;' alt='circle'>";
        check()
        t = t + 1;
        
        }
    } else {
        if(document.getElementById("e").innerText ==='.'){
        document.getElementById("e").innerHTML = "<img src='cross.png' style='width:70px; height:70px;' alt='cross'>";
        check()
        t = t - 1;
       
        }
    }
    
});

var f = document.getElementById("f").addEventListener('click', function name() {
    if (t === 0) {
        if(document.getElementById("f").innerText ==='.'){
        document.getElementById("f").innerHTML = "<img src='circle.png' style='width:70px; height:70px;' alt='circle'>";
        check()
        t = t + 1;
    
    
       

        }
    } else {
        if(document.getElementById("f").innerText ==='.'){
        document.getElementById("f").innerHTML = "<img src='cross.png' style='width:70px; height:70px;' alt='cross'>";
        check()
        t = t - 1;
       
        }
    }
    
    
});

var g = document.getElementById("g").addEventListener('click', function name() {
    if (t === 0) {
        if(document.getElementById("g").innerText ==='.'){
        document.getElementById("g").innerHTML = "<img src='circle.png' style='width:70px; height:70px;' alt='circle'>";
        check()
        t = t + 1;
       
        }
    } else {
        if(document.getElementById("g").innerText ==='.'){
        document.getElementById("g").innerHTML = "<img src='cross.png' style='width:70px; height:70px;' alt='cross'>";
        check()
        t = t - 1;
       
        }
    }
    
});

var h = document.getElementById("h").addEventListener('click', function name() {
    if (t === 0) {
        if(document.getElementById("h").innerText ==='.'){
        document.getElementById("h").innerHTML = "<img src='circle.png' style='width:70px; height:70px;' alt='circle'>";
        check()
        t = t + 1;
       
        }
    } else {
        if(document.getElementById("h").innerText ==='.'){
        document.getElementById("h").innerHTML = "<img src='cross.png' style='width:70px; height:70px;' alt='cross'>";
        check()
        t =
         t - 1;
         
        }
    }
    
});

var i = document.getElementById("i").addEventListener('click', function name() {
    if (t === 0) {
        if(document.getElementById("i").innerText ==='.'){
            
        document.getElementById("i").innerHTML = "<img src='circle.png' style='width:70px; height:70px;' alt='circle'>";
        check()
        t = t + 1;
        
        }
    } else {
        if(document.getElementById("i").innerText ==='.'){
        document.getElementById("i").innerHTML = "<img src='cross.png' style='width:70px; height:70px;' alt='cross'>";
        check()
        t = t - 1;
      
        }
    }
    
});


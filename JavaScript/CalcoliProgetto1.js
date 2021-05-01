function nascondiTutto(){
    var x;

    x= document.getElementById("nascondi");
    if(x.style.display != "none"){
        x.style.display = "none";
    }

    x= document.getElementById("nascondi2");
    if(x.style.display != "none"){
        x.style.display = "none";
    }
}

function verificaPassword(){
    var pass;
    var apri;
    
    pass=document.getElementById("pass").value; 
    apri = document.getElementById("nascondi");
    if(pass=="sofia"){
        apri.style.display = "block";
    }  
    else {
        apri.style.display = "none";
    }

    apri = document.getElementById("nascondi2");
    if(pass=="sofia"){
        apri.style.display = "block";
    }  
    else {
        apri.style.display = "none";
    }
}



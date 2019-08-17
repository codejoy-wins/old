function myFunction(){
    console.log("Clicked");
    if(document.getElementById("body").style.background==="black"){
        document.getElementById("body").style.background="aquamarine"
        document.getElementById("body").style.color="black"
        return
    }
    document.getElementById("body").style.background="black"
    document.getElementById("body").style.color="aquamarine"
}
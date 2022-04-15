var o1=document.getElementById("li1");
var o2=document.getElementById("div1");
var isplay=false;
function MyClick(){
    if(isplay==false){
        o2.style.display="block";
            isplay=true;
        }
        else{
            o2.style.display="none";
            isplay=false;
        }
}
o1.onmouseup=()=>{
    MyClick();
}
var o3=document.getElementById("bm");
var isclick;
function Myclick(){
    if(isclick==false){
        document.getElementById("father").style.left="0px";
        isclick=true;
    }
    else{
        document.getElementById("father").style.left="-700px";
        isclick=false;
    }
}
o3.onclick=()=>{
    Myclick();
};
onload=Myclick();
var o4=document.getElementById("text1");
var o5=document.getElementById("text2");
var o6=document.getElementById("selectcipher");
function MySelector()
{
    if(o6.value=="cipher")
    {
        o5.value=btoa(o4.value)
    }
    else if(o6.value=="notcipher")
    {
        o5.value=atob(o4.value);
    }
}
o6.onchange=()=>{
    MySelector();
};
o4.oninput=()=>{
localStorage.setItem("text1",o4.value);
};
o5.oninput=()=>{
    localStorage.setItem("text2",o5.value);
    };
    onload=()=>{
        o4.value=localStorage.getItem("text1");
        o5.value=localStorage.getItem("text2");
    }
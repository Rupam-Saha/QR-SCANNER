const api= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example";
const btn=document.querySelector("#b");
btn.addEventListener("click",()=>{
    getimg();
});
function getimg(){
    const box=document.querySelector(".search input");
    let val=box.value;
    if(val=="")
    {
        alert("please type something!!!!");
    }
    else{
    const image=document.querySelector(".image");
    const img=document.createElement("img");
    img.src=api+val;
    image.append(img);
    box.value="";
    }
}
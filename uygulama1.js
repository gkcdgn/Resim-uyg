const formWrapper=document.querySelector(".form-wrapper");
const form=document.querySelector("#form");
const searchinputt=document.querySelector("#search-input");
const buttonwrapper=document.querySelector(".button-wrapper");
const searchButton=document.querySelector("#search-button");
const  clearButton=document.querySelector("#clear-button");
const imagelistWrapper=document.querySelector(".image-list");
console.log(imagelistWrapper)

runEventlisteners();

function runEventlisteners(){
    form.addEventListener("submit",search);
    clearButton.addEventListener("click",clear);
}
function search(e){
    const value=searchinputt.value.trim();
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method:"GET",
        headers:{
            Authorization: "Client-ID 26YHpfEDFTP1XDGSEs6GGIUBjXMvBp-g31Krgi3NCuQ"

        }
    })
    .then((res)=> res.json())
    .then((data)=>{
        Array.from(data.results).forEach((image)=>{
            console.log(image.urls.small)
            addimageToUI(image.urls.small);
        })
    })
    .catch((err)=>console.log(err));

    e.preventDefault();
}

function addimageToUI(url){
    const div=document.createElement("div");
    div.className="card";
    const img=document.createElement("img");
    img.setAttribute("src",url)
    img.height='400';
    img.width='400';
    div.append(img);
    imagelistWrapper.append(div);



}

function clear(){
    searchinputt.value=" ";
    Array.from(imagelistWrapper.children).forEach((child)=>child.remove());

}


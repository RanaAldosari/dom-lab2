let students = [
{
name: "rana",
age:24,
gender:"femal",
imgUrl:"Screenshot 2025-04-30 134600.png",
    },
{
name: "dema",
gender:"male",
age:30,
imgUrl:
"Screenshot 2025-05-01 104944.png",
},
{
name: "aisha",
age:20,
gender:"femal",
imgUrl:
"Screenshot 2025-05-01 104944.png",
    },
  ];
  
  let body = document.body;
  students.map((img) => {
    let gend=document.createElement("p");
    gend.innerText=`user gender : ${img.gender}`
    if(img.gender==="femal"){
gend.style.color="pink";

}else{
        gend.style.color="blue"
}
    body.appendChild(gend)

    
    let p = document.createElement("img");
    p.innerText = img.imgUrl;
    p.src=img.imgUrl;
    p.style.width="100px";
    p.innerText = ` Image Url : ${img.imgUrl}`;
    body.appendChild(p);
  });
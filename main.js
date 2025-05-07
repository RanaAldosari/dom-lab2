let students = [
{
name: "rana",
age:24,
gender:"femal",
imgUrl:"https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimage&psig=AOvVaw0ZdPyuhBjioRQuf4GzQLa2&ust=1746702164659000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNDd0OKakY0DFQAAAAAdAAAAABAE",
    },
{
name: "dema",
gender:"male",
age:30,
imgUrl:
"https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimage&psig=AOvVaw0ZdPyuhBjioRQuf4GzQLa2&ust=1746702164659000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNDd0OKakY0DFQAAAAAdAAAAABAE",
},
{
name: "aisha",
age:20,
gender:"femal",
imgUrl:
"https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimage&psig=AOvVaw0ZdPyuhBjioRQuf4GzQLa2&ust=1746702164659000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNDd0OKakY0DFQAAAAAdAAAAABAE",
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
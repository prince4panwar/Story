var arr = [
    {
        dp:"https://images.unsplash.com/photo-1596599623428-87dbae5e7816?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXR0cmFraGFuZHxlbnwwfHwwfHx8MA%3D%3D", 
        story:"https://images.unsplash.com/photo-1596599623428-87dbae5e7816?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXR0cmFraGFuZHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1588487838036-28303ea2f560?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXR0cmFraGFuZHxlbnwwfHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1588487838036-28303ea2f560?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXR0cmFraGFuZHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXR0cmFraGFuZHxlbnwwfHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXR0cmFraGFuZHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1618772446265-3f9f8e6f8487?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXR0cmFraGFuZHxlbnwwfHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1618772446265-3f9f8e6f8487?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXR0cmFraGFuZHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1563293766-4e8ab7be1ea4?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXR0cmFraGFuZHxlbnwwfHwwfHx8MA%3D%3D",
        story:"https://images.unsplash.com/photo-1563293766-4e8ab7be1ea4?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXR0cmFraGFuZHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1626865002875-3dd5bebee4f2?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHV0dHJha2hhbmR8ZW58MHx8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1626865002875-3dd5bebee4f2?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHV0dHJha2hhbmR8ZW58MHx8MHx8fDA%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1609769682973-990c3b6695dc?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXR0YXJha2hhbmR8ZW58MHx8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1609769682973-990c3b6695dc?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXR0YXJha2hhbmR8ZW58MHx8MHx8fDA%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1610715936287-6c2ad208cdbf?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXR0YXJha2hhbmR8ZW58MHx8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1610715936287-6c2ad208cdbf?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXR0YXJha2hhbmR8ZW58MHx8MHx8fDA%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1547378809-db8f9515a63b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXR0YXJha2hhbmR8ZW58MHx8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1547378809-db8f9515a63b?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXR0YXJha2hhbmR8ZW58MHx8MHx8fDA%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1610730349385-70d2a67a61fa?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHV0dGFyYWtoYW5kfGVufDB8fDB8fHww",
        story:"https://images.unsplash.com/photo-1610730349385-70d2a67a61fa?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHV0dGFyYWtoYW5kfGVufDB8fDB8fHww"
    },
    {
        dp:"https://images.unsplash.com/photo-1612645052924-5ec1aca579d6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHV0dGFyYWtoYW5kfGVufDB8fDB8fHww",
        story:"https://images.unsplash.com/photo-1612645052924-5ec1aca579d6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHV0dGFyYWtoYW5kfGVufDB8fDB8fHww"
    },
    {
        dp:"https://images.unsplash.com/photo-1585773668502-bf18672c14ac?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHV0dGFyYWtoYW5kfGVufDB8fDB8fHww",
        story:"https://images.unsplash.com/photo-1585773668502-bf18672c14ac?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHV0dGFyYWtoYW5kfGVufDB8fDB8fHww"
    },
    {
        dp:"https://images.unsplash.com/photo-1626014303757-6366ef55c4ab?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHV0dGFyYWtoYW5kfGVufDB8fDB8fHww",
        story:"https://images.unsplash.com/photo-1626014303757-6366ef55c4ab?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHV0dGFyYWtoYW5kfGVufDB8fDB8fHww"
    },
    {
        dp:"https://images.unsplash.com/photo-1547452377-a7215f34c6a7?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHV0dGFyYWtoYW5kfGVufDB8fDB8fHww",
        story:"https://images.unsplash.com/photo-1547452377-a7215f34c6a7?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHV0dGFyYWtoYW5kfGVufDB8fDB8fHww"
    },
    {
        dp:"https://images.unsplash.com/photo-1612438214708-f428a707dd4e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXR0YXJha2hhbmR8ZW58MHx8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1612438214708-f428a707dd4e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXR0YXJha2hhbmR8ZW58MHx8MHx8fDA%3D"
    }
];

var clutter = "";
var storiyan = document.querySelector("#storiyan");

arr.forEach((elem,idx)=>{
    clutter += `<div class="story">
    <img id = "${idx}" src="${elem.dp}" alt=""></div>`;
})

storiyan.innerHTML = clutter;
storiyan.addEventListener("click",(dets)=>{
    //  console.log(dets.target.id);
   document.querySelector("#full-screen").style.display = "block";
   document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

   setTimeout(() => {
    document.querySelector("#full-screen").style.display = "none";
   }, 2000);
})
const form=document.querySelector('form')
const container=document.querySelector('.image-container')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let query=form.querySelector('input').value;
    apicall(query);
})

async function apicall(query){
    const request=await fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    const response=await request.json();
    makeImage(response);
}

function makeImage(response){
    for (let movie of response){
        let source=movie.show.image.medium;
        const img=document.createElement('img');
        img.src=source;
        container.appendChild(img);
    }
}
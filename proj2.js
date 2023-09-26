const input = () => document.querySelector('#name').value;

const call = async (input) => {
    try{
       let dataincome = await axios.get(`https://api.tvmaze.com/search/shows?q=${input}`);
       let div = document.querySelector('#base');
       for(let i =0;i<dataincome.data.length;i++){
            let imgurl = dataincome.data[i].show.image.medium;
            console.log(imgurl);
            if(imgurl){
                let img = document.createElement("img");
                img.setAttribute("src","");
                img.setAttribute("id",`img${i}`);
                img.setAttribute("alt","sorry no image");
                div.appendChild(img); 
                document.querySelector(`#img${i}`).src=imgurl.toString();
            }else{
                console.log("unable to display the result as no image available");
            }
       }
    }
    catch(e){
        console.log('error',e);
    }
}

document.querySelector('button').addEventListener("click",async ()=>{
    while(document.querySelector('#base').firstChild){
        console.log("inside loop");
        document.querySelector('#base').removeChild(document.querySelector('#base').firstChild);
    }
    let inp = input();
     call(inp);
});
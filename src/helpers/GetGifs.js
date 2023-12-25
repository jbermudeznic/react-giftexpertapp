


export const getGifs = async(categoria) =>{
    const url =  `https://api.giphy.com/v1/gifs/search?limit=20&q=${categoria}&api_key=DbjJvyEyYo5saU53j8ZcbgR9CDerxCLY`;

     

     const respuesta = await fetch(url) ;
     const { data } = await respuesta.json();
     //console.log(data);

     const gifs = data.map(img =>{
         return {
              id : img.id,
              title : img.title,
              imagen : img.images?.downsized_medium.url
         }
     })  
     
     //console.log(gifs);
     //setImagenes(gifs);
     return gifs;

 }



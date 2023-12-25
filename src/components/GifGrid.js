import React from "react";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
//import { getGifs } from "../helpers/GetGifs";


export const GifGrid = ({categoria})=>{

     /*const [imagenes,setImagenes] = useState([]);*/

 
   
   const {data:images,loading} = useFetchGifs(categoria);
   
   return (
          <>
         <h3>{categoria}</h3>
         <h4>{loading && <p>Cargando....</p>}</h4>
            {       
               <div className="card-grid">
                {
                images.map( img => (
                    <GifGridItem key = {img.id} {...img} />
                    //<li key={id}>{title}</li>
               
               ))
                 }
          </div>
          }       
         </>           
   )

}
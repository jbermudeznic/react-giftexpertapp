import React,{useState} from "react"
import { AddCategorie } from "./components/AddCategorie";
import { GifGrid } from "./components/GifGrid";




const GifExpertApp= ()=>{

    const [categorias,setCategorias] = useState(["One Punch"]);


    return(
        <>
            <h1>GifExpertApp</h1>
             <AddCategorie setCategories = {setCategorias}/>
            <hr/>
            <ol>
                {
                    categorias.map(categoria => (
                        <GifGrid
                            key = {categoria} 
                            categoria = {categoria} /> 
                        )
                    )
                }
            </ol>
        </>
    )

}

export default GifExpertApp;
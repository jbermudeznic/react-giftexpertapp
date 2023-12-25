import { useState,useEffect } from "react"
import {getGifs} from "../helpers/GetGifs"



export const useFetchGifs = (categoria) => {
    const [state,setState] = useState(
        {
            data : [],
            loading: true
        }
    )

   

    useEffect(() => {
        //getGifs();
        
        getGifs(categoria).then(imgs =>
                setState({
                    data : imgs,
                    loading: false
                    })                
         );
         
         //imgs => {  setImagenes(imgs);
        },[categoria])

        
    /*setTimeout(() => {
       setState({
        data : [1,2,3,4,5,6,7,8,9],
        loading: false

       }) 
    }, 3000);*/

    return state;
}



 



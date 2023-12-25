import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategorie =({setCategories}) =>{

    const [inputValue,setInputValue] = useState('');

    const handleAdd = (e)=>{
        setInputValue(e.target.value);
    }

    const handleSubmit=  (e) => {
        e.preventDefault();
        //console.log('Realizando submit');
        //props.setCategorias();
        if(inputValue.length > 0 ){
            setCategories(categorias => [inputValue,...categorias]);
            setInputValue('');
        }

    }


    return <>
        <form onSubmit={handleSubmit}>
        <div>
            <h2><input type="text" value = {inputValue} onChange={ handleAdd } /></h2>
        </div>
        </form>
    </>

}

AddCategorie.propTypes = {
    setCategories : PropTypes.func.isRequired
}

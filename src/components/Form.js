import { useState } from "react";
import Item from './Item';
import { v4 as uuidv4 } from 'uuid';

export default function Form(){

    const [errorInput, setErrorInput] = useState(false);

    // Array de base
    const [dataArr, setDataArr] = useState([])

    // Données du formulaire
    const [stateInput, setStateInput] = useState();

    const linkedInput = e => {
        setStateInput(e);
    }

    // Suppression des éléments de liste
    const deleteElement = id => {
        const filteredState = dataArr.filter(item => {
            return item.id !== id;
        })

        setDataArr(filteredState);
    }

    // Ajout des éléments de liste
    const addElmt = e => {
        e.preventDefault();

        if(stateInput){
            const newArr = [...dataArr];
            
            const newToDo = {};
            newToDo.txt = stateInput;
            newToDo.id = uuidv4();
    
            newArr.push(newToDo);
            setDataArr(newArr);
            
            setStateInput('');
            setErrorInput(false);
        }
        else{
            setErrorInput(true);
        }
    }

    return (
        <div>
            <div className="container mx-auto text-center pt-6 mb-6 md:pt-10 md:mb-10">
                <h1 className="text-3xl font-bold text-white mb-7">Todo-List</h1>
    
                <form onSubmit={e => addElmt(e)} className="block text-left flex flex-wrap flex-col justify-center content-start">
                    <label htmlFor="todo" className="text-xl font-bold text-gray-200 mb-4 w-full">Chose à faire</label>
                    {
                        errorInput &&
                        <span className=" block mb-4 bg-gradient-to-r from-purple-600 w-full text-red-200 text-m rounded box-border px-2 py-1">Le formulaire est mal rempli</span>
                    }
                    <input 
                        type="text" 
                        name="todo" 
                        id="todo" 
                        onInput={e => linkedInput(e.target.value)}
                        value={stateInput}
                        className="mb-4 bg-transparent bg-gradient-to-r from-pink-600 w-full rounded box-border px-2 py-1 text-white focus:outline-none"
                    />
                    <button className="bg-gradient-to-r from-pink-400 to-pink-500 text-white text-m hover:bg-pink-600 rounded w-max px-3 py-1 transition transition-300">Envoyer</button>
                </form>
            </div>

            <div className="container mx-auto py-6 md:py-10">
                <h2 className="text-2xl font-bold text-white mb-7">Liste des choses à faire:</h2>

                <ul className="list-none list-inside space-y-4">

                    {
                    dataArr.length ?
                    dataArr.map((item) => {
                        return(
                            <Item 
                            txt={item.txt}
                            key={item.id}
                            id={item.id}
                            delFunc={deleteElement}
                            />
                        );
                    })
                    :
                    <p className="text-purple-200 font-bold text-xl">Pas de choses à faire</p>
                    }
                </ul>
            </div>
        </div>
    )
}
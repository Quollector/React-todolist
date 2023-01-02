import { useState } from "react";
import Item from "./Item";
import { v4 as uuidv4 } from 'uuid';

export default function Items(){

    const [dataArr, setDataArr] = useState([
        {txt: "Promener le chien", id: uuidv4()},
        {txt: "Faire la vaisselle", id: uuidv4()},
        {txt: "Faire les courses", id: uuidv4()}
    ])

    const deleteElement = id => {
        const filteredState = dataArr.filter(item => {
            return item.id !== id;
        })
        
        setDataArr(filteredState);
    }

    return(
        <div className="container mx-auto py-6 md:py-10">
            <h2 className="text-2xl font-bold text-white mb-7">Liste des choses à faire:</h2>

            <ul className="list-none list-inside space-y-4">
    
                {dataArr.map((item) => {
                    return(
                        <Item 
                        txt={item.txt}
                        key={item.id}
                        id={item.id}
                        delFunc={deleteElement}
                        />
                    );
                })}
            </ul>
        </div>
    );
}
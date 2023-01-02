import { useState } from "react";
import Item from "./Item";

export default function Items(){
    return(
        <div className="container mx-auto py-6 md:py-10">
            <h2 className="text-2xl font-bold text-white mb-7">Liste des choses à faire:</h2>

            <ul className="list-none list-inside">
                <Item />
            </ul>
        </div>
    );
}
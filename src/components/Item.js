import { useState } from "react";

export default function Item(props){

    return(
        <li className="rounded-md bg-gradient-to-r from-purple-600 box-border py-4 px-6 flex justify-between content-center gap-3 flex-wrap">
            <p className="text-white flex items-center">{props.txt}</p>
            <button onClick={() => props.delFunc(props.id)} className="bg-gradient-to-r from-pink-400 to-pink-500 text-white text-m hover:bg-pink-600 rounded w-max px-3 py-1 transition transition-300">Supprimer</button>
        </li>
    );
}
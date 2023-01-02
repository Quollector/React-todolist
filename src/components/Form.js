import { useState } from "react";
import Items from './Items';

export default function Form(){
    return (
        <div>
            <div className="container mx-auto text-center pt-6 mb-6 md:pt-10 md:mb-10">
                <h1 className="text-3xl font-bold text-white mb-7">Todo-List</h1>
    
                <div className="block text-left flex flex-wrap flex-col justify-center content-start">
                    <label htmlFor="todo" className="text-xl font-bold text-gray-200 mb-4 w-full">Chose à faire</label>
                    <input type="text" name="todo" id="todo" className="mb-4 bg-purple-200 w-full rounded box-border px-2 py-1 focus:outline-none"/>
                    <button className="bg-pink-400 text-white text-m hover:bg-pink-600 rounded w-max px-3 py-1 transition transition-300">Envoyer</button>
                </div>
            </div>
    
            <Items />
        </div>
    );
}
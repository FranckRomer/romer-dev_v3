import { useState } from "react";

export function useLocalStorage(key: string, inicialValue: string) {
    const [storedValue, setStoredValue] = useState( ()=>{
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : inicialValue
        } catch (error) {
            return inicialValue
        }
    })

    const setValue = (value:string) =>{
        try {
            setStoredValue(value)
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch (error) {
            console.log(error);        
        }
    }

    // console.log(storedValue);
    
    return [storedValue, setValue]
}
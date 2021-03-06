import {useEffect} from 'react';
import useLocalStorage from './useLocalStorage.js';

const useWhiteMode = () => {
    const [someValue, setSomeValue] = useLocalStorage("darkMode");

    useEffect(() => {
      //let addStyle = document.querySelector("navBar");

       if(someValue === true) {
        //console.log(addStyle);
        document.body.classList.add("white-mode");

        // code to add class 'dark-mode to body'
        // this is done by adding to the dom directly, have done it before, but need to look up how I did it   
    }
       else {
        document.body.classList.remove("white-mode");
        //let removeStyle = document.querySelector("navBar");
        //removeStyle.classList.toggle("dark-mode__toggle");
           // remove the class 'dark-mode from the body'
        //return [false, setValue];
        }

       // I feel like we need to return the setted element, but I don't know how to do that
    }, [someValue]);

    return [someValue, setSomeValue];
}

export default useWhiteMode;
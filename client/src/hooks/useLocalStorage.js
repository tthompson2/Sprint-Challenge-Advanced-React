import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {

    const [storedValue, setStoredName] = useState(() => {

        const item = window.localStorage.getItem(key);

        return item ? JSON.parse(item) : initialValue;
    });

    const setName = value => {
        setStoredName(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    return [storedValue, setName];
}

export default useLocalStorage;
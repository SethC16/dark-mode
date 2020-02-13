import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (initialValue) => {
    const [ value, setValue ] = useLocalStorage('dark-mode', initialValue);
    const element = document.body;

    useEffect(() => {
        if (value === true ) {
            return element.classList.add('dark-mode')
        } else {
            return element.classList.remove('dark-mode')
        }
    }, [value])

    // const toggleMode = e => {
    //     e.preventDefault();
    //     setValue(!value);
    //   };

      return [value, setValue]
}
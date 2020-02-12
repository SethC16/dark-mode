import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = (key, initialValue) => {
    const [ value, setValue ] = useLocalStorage(key, initialValue);
    const element = document.body;

    useEffect(() => {
        if (value === true ) {
            return element.classList.add('dark-mode')
        } else {
            return element.classList.remove('dark-mode')
        }
    })

    const toggleMode = e => {
        e.preventDefault();
        setValue(!value);
      };

      return [value, toggleMode]
}
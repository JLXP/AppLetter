import {useContext} from 'react';
import { LetterContext } from '../context/LettersProvider';

export const useLetters = () => {
    return useContext(LetterContext);
}
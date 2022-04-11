import React from 'react';
import { AppLetters } from './components/AppLetters';
import { LetterProvider } from './context/LettersProvider';

export const App = () => {
  return (
    <LetterProvider>
      <AppLetters/>
    </LetterProvider>

  )
}

import React from 'react';
import { useLetters } from '../hooks/useLetters';

export const Letter = () => {
    const {letter, loading} = useLetters();
  return (
      loading ? 'Loading....': <div className="letter">{letter}</div>
    
  )
}

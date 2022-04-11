import React from 'react';
import { Formulario } from './Formulario';
import { Alert } from './Alert';
import {Letter } from './Letter';
import {useLetters} from '../hooks/useLetters';

export const AppLetters = () => {
const {alert,letter,loading} = useLetters();

  return (
      <>
        <header>Song Lyrics Search</header>
        <Formulario/>

        <main>

          {alert ? <Alert>{alert}</Alert>: 
          letter ? <Letter/>:
          loading? 'Loading':
          <p className='text-center'>Look for lyrics from your favorite artists</p>}

        </main>
        
    </>
  )
}

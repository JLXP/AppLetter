import {useState, createContext} from 'react';
import axios from 'axios';

const LetterContext = createContext();

const LetterProvider = ({children}) => {

    const [alert, setAlert] = useState('');
    const [letter, setLetter] = useState('');
    const [loading, setLoading] = useState(false);

    const searchLetter = async(search) => {
        
        setLoading(true);
        setLetter('');

        try{
            const {artist, song} = search;
            const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
            const {data} = await axios(url);
            console.log(data);
            setLetter(data.lyrics);
            setAlert('');
        }catch(error){
            setAlert('Song not found');
        }
        setLoading(false);
    }

    return (
        <LetterContext.Provider
            value={{
                alert, 
                setAlert,
                searchLetter,
                letter,
                loading
            }}
        >
            {children}
        </LetterContext.Provider>
    )
}

export {
    LetterProvider,
    LetterContext
}
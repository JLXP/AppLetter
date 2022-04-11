import React,{useState} from 'react';
import {useLetters} from '../hooks/useLetters';


export const Formulario = () => {
    const {setAlert, searchLetter} = useLetters();

    const [search, setSearch] = useState({
        artist:'',
        song:''
    });

    const {artist,song}=search;


    const handleSubmit = (e) => {
        e.preventDefault();

        

        if (Object.values(search).includes('')){
            setAlert('Fields cannot be empty');
            return;
        }
        searchLetter(search);
        setAlert('');
    }

  return (
    <form
        onSubmit={handleSubmit}
    >
        <legend>Searh for Artists and Songs</legend>

        <div className="form-grid">
            <div>
                <label>Artist</label>
                <input 
                    type="text"
                    name="artist"
                    placeholder="Artist name"
                    value={artist}
                    onChange={e=> setSearch({
                        ...search,
                        [e.target.name] : e.target.value
                    })}
                />
            </div>
            <div>
                <label>Song</label>
                <input 
                    type="text"
                    name="song"
                    placeholder="Song name"
                    value={song}
                    onChange={e=> setSearch({
                        ...search,
                        [e.target.name] : e.target.value
                    })}
                />
            </div>
            <input type="submit" value="Search" />

        </div>
    </form>
  )
}

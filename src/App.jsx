import './App.css';

import { useState } from 'react';

import { collection } from 'firebase/firestore';

import Quotes from './components/Quotes';
import { db } from './config/firebase';

function App() {
  const [characters, setCharacter] = useState();
  const charactersCollectionRef = collection(db, "characters");

  // useEffect(() => {
  //   // get collection data
  //   const getCharacters = async () => {
  //     const data = await getDocs(charactersCollectionRef);
  //     setCharacter(data.docs.map((doc) => ({ ...doc.data() })));
  //     console.log(data.docs.map((doc) => ({ ...doc.data() })));
  //     // console.log(data.docs);
  //   };

  //   getCharacters();
  // }, []);

  console.log(characters);
  return (
    <div className="Apps">
      <Quotes />
      {/* {characters &&
        characters.map((char, index) => {
          const { name, img, nickname, occupation, portrayed } = char;
          return (
            <section key={index}>
              <h3>{name}</h3>
              <span>Nickname </span>
              <span>{nickname}</span>
              <p>Portrayed </p>
              <strong>{portrayed}</strong>
              <img src={img} alt={`${name} image`} />
            </section>
          );
        })} */}
    </div>
  );
}

export default App;

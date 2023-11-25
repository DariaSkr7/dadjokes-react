import './style.css';
import { useEffect, useState } from 'react';
import { Joke } from '../../components/joke';

export const HomePage = () => {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    const fetchJokes = async () => {
      const response = await fetch('http://localhost:4000/api/jokes');
      const data = await response.json();
      setJokes(data.result);
    };
    fetchJokes();
  }, []);
  const jokesElements = jokes.map((joke) => {
    return (
      <Joke
        key={joke.id}
        userAvatar={joke.avatar}
        userName={joke.name}
        text={joke.text}
        likes={joke.likes}
        dislikes={joke.dislikes}
      />
    );
  });
  return <div className="container">{jokesElements}</div>;
};

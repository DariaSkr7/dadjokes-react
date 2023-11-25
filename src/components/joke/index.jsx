import { useState } from 'react';
import './style.css';

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [like, setLike] = useState(likes);
  const [dislike, setDislike] = useState(dislikes);

  const onLike = () => {
    setLike(like + 1);
  };
  const onDislike = () => {
    setDislike(dislike + 1);
  };
  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} />
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">{text}</p>
      </div>
      <div className="joke__likes">
        <button
          onClick={onLike}
          id="btn-up"
          className="btn-like btn-like--up"
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {like}
        </span>
        <button
          onClick={onDislike}
          id="btn-down"
          className="btn-like btn-like--down"
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {dislike}
        </span>
      </div>
    </div>
  );
};

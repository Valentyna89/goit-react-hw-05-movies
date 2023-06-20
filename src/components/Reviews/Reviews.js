import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../services/api';
import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId)
      .then(setReviews)
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <ul className={css.reviewContainer}>
      {reviews &&
        reviews.map(({ id, author, content }) => {
          return (
            <li key={id} className={css.reviewItem}>
              <p className={css.authorReview}>{author} </p>
              <p className={css.reviewContent}>{content}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default Reviews;

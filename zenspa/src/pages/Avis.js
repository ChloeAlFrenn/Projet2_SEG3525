import React from 'react';
import Review from '../components/Review';
import './Avis.css';

const Avis = () => {
  const reviews = [
    { comment: "Très bon service!", rating: 5 },
    { comment: "Pas mal, mais peut être amélioré.", rating: 3 },
    { comment: "Mauvaise expérience.", rating: 1 },
    { comment: "Excellent! Très relaxant.", rating: 5 },
    { comment: "Je reviendrai certainement.", rating: 4 }
  ];

  return (
    <div className="avis-container">
      <h1>Avis Reçus</h1>
      {reviews.map((review, index) => (
        <Review key={index} comment={review.comment} rating={review.rating} />
      ))}
    </div>
  );
};

export default Avis;

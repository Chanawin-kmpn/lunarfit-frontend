
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const FeedbackContainer = styled.div`
  font-family: 'Arial', sans-serif;
  background: #f7f7f7;
  min-height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  background-color: #ecf229;
  color: #333;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  border-radius: 5px;
  width: 100%;
  margin-bottom: 20px;
`;

const BackButton = styled.button`
  color: #333;
  position: absolute;
  top: 20px;
  left: 20px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
`;

const Rating = styled.div`
  font-size: 32px; 
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  margin-top: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  font-family: 'Arial', sans-serif;
`;

const SubmitButton = styled.button`
  background-color: #ecf229;
  color: #333;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
`;

const Feedback = () => {
  const [rating, setRating] = useState(0); // Rating state
  const [comment, setComment] = useState(''); // Comment state
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Handle the submit action here
    alert(`Rating: ${rating}, Comment: ${comment}`);
    // navigate to the previous page or to a 'thank you' page
  };

  return (
    <FeedbackContainer>
      <BackButton onClick={() => navigate(-1)}>&larr;</BackButton>
      <Header>Feedback</Header>
      <h2>How was your experiance?</h2>
      <Rating>
        {/* Render stars based on the rating state */}
        {'★'.repeat(rating)}
        {'☆'.repeat(5 - rating)}
      </Rating>
      <p>Share your thoughts on our app! Your insights aid our growth and assist fellow users in making informed choices.</p>
      <TextArea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Your feedback..."
      />
      <SubmitButton onClick={handleSubmit}>SUBMIT</SubmitButton>
    </FeedbackContainer>
  );
};

export default Feedback;

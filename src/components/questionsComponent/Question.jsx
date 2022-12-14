import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addAnswer } from '../../redux-files/actions/answer';
import { Retake } from '../Retake.jsx';

const Question = ({ question, answers, selectAnswer }) => {
  const dispatch = useDispatch()


  function onClickanswer(answer) {
    selectAnswer(answer);
    dispatch(addAnswer(answer))
  }
  return (
    <div data-testid='question-show'>
      <Card className='shadow d-flex text-center'>
        <Card.Body>
          <div className=''>
            <Card.Header><h4>{question}</h4></Card.Header>
            <ul className="list-group shadow-sm"
              data-testid="answers-show"
            >
              {answers.map((answer, key) => (

                <li className="list-group-item"
                  data-testid="answer-show"
                  role='button'
                  key={key}
                  onClick={() => onClickanswer(answer)}
                >
                  {answer.answer}
                </li>
              ))}
            </ul>
          </div >
        </Card.Body>
      </Card>
      <Retake />
    </div>
  )
}

export default Question


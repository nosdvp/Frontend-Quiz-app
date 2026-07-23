import React, { useState } from 'react'
import './AnswerBlock.scss'
import { quizData } from '../../quizData'
import html from '../../img/html.svg'
import css from '../../img/css.svg'
import java from '../../img/javascript.svg'
import body from '../../img/body.svg'

const AnswerBlock = ({ 
  article, 
  setArticle,
  count,
  currentQuestion,
  countSuccessAnswer,

  setCurrentQuestion,
  setCount,
  setCountSuccessAnswer,
  setResultArticle
}) => {

  const getArticle = (item) => {
    setArticle(item)
    setResultArticle(item)
  }

  const [currentAnswer, setCurrentAnswer] = useState(0);
  const [saveAnswer, setSaveAnswer] = useState([])

  const nextQuestion = (item) => {
    setSaveAnswer(prev => [...prev, item])
    setCount(count + 1)
    setCurrentAnswer(prev => prev + 1)
    setCurrentQuestion(prev => prev + 1)
    
    console.log(saveAnswer)

    if(article === 'HTML'){
      if(item === quizData.HTML[currentAnswer].answers[quizData.HTML[currentAnswer].correctAnswer]){
      setCountSuccessAnswer(prev => prev + 1)
    }else{
      setCountSuccessAnswer(prev => prev + 0)
    }
    }

    if(article === 'CSS'){
      if(item === quizData.CSS[currentAnswer].answers[quizData.CSS[currentAnswer].correctAnswer]){
      setCountSuccessAnswer(prev => prev + 1)
    }else{
      setCountSuccessAnswer(prev => prev + 0)
    }
    }

    if(article === 'JS'){
      if(item === quizData.JavaScript[currentAnswer].answers[quizData.JavaScript[currentAnswer].correctAnswer]){
      setCountSuccessAnswer(prev => prev + 1)
    }else{
      setCountSuccessAnswer(prev => prev + 0)
    }
    }

    if(article === 'body'){
      if(item === quizData.Accessibility[currentAnswer].answers[quizData.Accessibility[currentAnswer].correctAnswer]){
      setCountSuccessAnswer(prev => prev + 1)
    }else{
      setCountSuccessAnswer(prev => prev + 0)
    }
    }
  }

  const result = (item) => {
    setArticle('result')
    setCurrentQuestion(0)
    setCount(count + 1)
    if(article === 'HTML'){
      if(item === quizData.HTML[currentAnswer].answers[quizData.HTML[currentAnswer].correctAnswer]){
      setCountSuccessAnswer(prev => prev + 1)
    }else{
      setCountSuccessAnswer(prev => prev + 0)
    }
    }
    if(article === 'CSS'){
      if(item === quizData.CSS[currentAnswer].answers[quizData.CSS[currentAnswer].correctAnswer]){
      setCountSuccessAnswer(prev => prev + 1)
    }else{
      setCountSuccessAnswer(prev => prev + 0)
    }
    }

    if(article === 'JS'){
      if(item === quizData.JavaScript[currentAnswer].answers[quizData.JavaScript[currentAnswer].correctAnswer]){
      setCountSuccessAnswer(prev => prev + 1)
    }else{
      setCountSuccessAnswer(prev => prev + 0)
    }
    }

    if(article === 'body'){
      if(item === quizData.Accessibility[currentAnswer].answers[quizData.Accessibility[currentAnswer].correctAnswer]){
      setCountSuccessAnswer(prev => prev + 1)
    }else{
      setCountSuccessAnswer(prev => prev + 0)
    }
    }
  }

  console.log(article)

  return (
    <div className='wrapper'>
      {article === '' ? (
        <>
          <button className='button' onClick={() => getArticle('HTML')}>
            <div className='button__innerBlock'>
              <div className='button__innerBlock_html'>
                <img src={html}/>
              </div>
              <div>HTML</div>
            </div>
          </button>

          <button className='button' onClick={() => getArticle('CSS')}>
            <div className='button__innerBlock'>
              <div className='button__innerBlock_css'>
                <img src={css}/>
              </div>
              <div>CSS</div>
            </div>
          </button>

          <button className='button' onClick={() => getArticle('JS')}>
            <div className='button__innerBlock'>
              <div className='button__innerBlock_js'>
                <img src={java}/>
              </div>
              <div>JavaScript</div>
            </div>
          </button>

          <button className='button' onClick={() => getArticle('body')}>
            <div className='button__innerBlock'>
              <div className='button__innerBlock_body'>
                <img src={body}/>
              </div>
              <div>Accessebility</div>
            </div>
          </button>
        </>
      ) : article === 'HTML' ? (
            currentQuestion !== 9 ? (
              <div className='buttonAnswerBlock'>{(quizData.HTML[currentAnswer].answers).map((item => (
              <button onClick={() => nextQuestion(item)}>{item}</button>
            )))}</div>
          ) : (
            <div className='buttonAnswerBlock'>{(quizData.HTML[currentAnswer].answers).map((item => (
              <button onClick={() => result(item)}>{item}</button>
            )))}</div>
          )

      ) : article === 'CSS' ? (
          currentQuestion !== 9 ? (
            <div className='buttonAnswerBlock'>{(quizData.CSS[currentAnswer].answers).map((item => (
              <button onClick={() => nextQuestion(item)}>{item}</button>
            )))}</div>
            ) : (
              <div className='buttonAnswerBlock'>{(quizData.CSS[currentAnswer].answers).map(item => (
                <button onClick={() => result(item)}>{item}</button>
              ))}</div>
            )

      ) : article === 'JS' ? (
          currentQuestion !== 9 ? (
            <div className='buttonAnswerBlock'>{(quizData.JavaScript[currentAnswer].answers).map((item => (
              <button onClick={() => nextQuestion(item)}>{item}</button>
            )))}</div>
            ) : (
              <div className='buttonAnswerBlock'>{(quizData.JavaScript[currentAnswer].answers).map((item) => (
                <button onClick={() => result(item)}>{item}</button>
              ))}</div>
            )
          
      ) : article === 'body' ? (
          currentQuestion !== 9 ? (
            <div className='buttonAnswerBlock'>{(quizData.Accessibility[currentAnswer].answers).map((item => (
              <button onClick={() => nextQuestion(item)}>{item}</button>
            )))}</div>
          ) : (
            <div className='buttonAnswerBlock'>{(quizData.Accessibility[currentAnswer].answers).map((item) => (
              <button onClick={() => result(item)}>{item}</button>
            ))}</div>
          )
          
      ) : article === 'result' ? (
          <div>result: {countSuccessAnswer}</div>

      ) : null}
    </div>
  )
}

export default AnswerBlock
import React from 'react'
import './QuestionBlock.scss'
import { quizData } from '../../quizData'

const QuestionBlock = ({ 
  light, 
  article, 
  currentQuestion,
}) => {

  return (
    <div className='wrapperQB'>
      {article === '' ? (
        <div className='helloBlock'>
          <div className={light ? 'helloBlock__firstLineTitleLight' : 'helloBlock__firstLineTitleDark'}>Welcome to the</div>
          <div className={light ? 'helloBlock__secondLineTitleLight' : 'helloBlock__secondLineTitleDark'}>Frontend Quiz!</div>
          <div className={light ? 'helloBlock__thirdLineTitleLight' : 'helloBlock__thirdLineTitleDark'}>Pich a subject to get started</div>
        </div>
      ) : article === 'HTML' ? (
        <>
          <div>{quizData.HTML[currentQuestion].question}</div>
        </>
      ) : article === 'CSS' ? (
        <>
          <div>{quizData.CSS[currentQuestion].question}</div>
        </>
      ) : article === 'JS' ? (
        <>
          <div>{quizData.JavaScript[currentQuestion].question}</div>
        </>
      ) : (
        <>
          <div>{quizData.Accessibility[currentQuestion].question}</div>
        </>
      )}
    </div>
  )
}

export default QuestionBlock
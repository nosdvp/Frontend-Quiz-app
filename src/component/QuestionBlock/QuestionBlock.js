import React from 'react'
import './QuestionBlock.scss'
import { quizData } from '../../quizData'

const QuestionBlock = ({ 
  light, 
  article, 
  currentQuestion,
  count
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
          <div className='wrapperQB__HTMLblock'>
            <div className='wrapperQB__HTMLblock_counter'>Question {count} of {quizData.HTML.length}</div>
            <div className='wrapperQB__HTMLblock_question'>{quizData.HTML[currentQuestion].question}</div>
          </div>
        </>
      ) : article === 'CSS' ? (
        <>
          <div className='wrapperQB__CSSblock'>
            <div className='wrapperQB__CSSblock_counter'>Question {count} of {quizData.CSS.length}</div>
            <div className='wrapperQB__CSSblock_question'>{quizData.CSS[currentQuestion].question}</div>
          </div>
        </>
      ) : article === 'JS' ? (
        <>
          <div className='wrapperQB__JSblock'>
            <div className='wrapperQB__JSblock_counter'>Question {count} of {quizData.JavaScript.length}</div>
            <div className='wrapperQB__JSblock_question'>{quizData.JavaScript[currentQuestion].question}</div>
          </div>
        </>
      ) : (
        <>
          <div className='wrapperQB__AccessibilityBlock'>
            <div className='wrapperQB__AccessibilityBlock_counter'>Question {count} of {quizData.Accessibility.length}</div>
            <div className='wrapperQB__AccessibilityBlock_question'>{quizData.Accessibility[currentQuestion].question}</div>
          </div>
        </>
      )}
    </div>
  )
}

export default QuestionBlock
import React from 'react'
import './QuestionBlock.scss'

const QuestionBlock = ({ light }) => {
  return (
    <div className='wrapperQB'>
      <div className='helloBlock'>
        <div className={light ? 'helloBlock__firstLineTitleLight' : 'helloBlock__firstLineTitleDark'}>Welcome to the</div>
        <div className={light ? 'helloBlock__secondLineTitleLight' : 'helloBlock__secondLineTitleDark'}>Frontend Quiz!</div>
        <div className={light ? 'helloBlock__thirdLineTitleLight' : 'helloBlock__thirdLineTitleDark'}>Pich a subject to get started</div>
      </div>
    </div>
  )
}

export default QuestionBlock
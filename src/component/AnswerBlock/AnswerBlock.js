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

  setCurrentQuestion,
}) => {

  const getArticle = (item) => {
    setArticle(item)
    
  }

  const [currentAnswer, setCurrentAnswer] = useState(0);
  const [count, setCount] = useState(1)

  const test = () => {
    setCount(prev => prev + 1)
    setCurrentAnswer(prev => prev + 1)
    setCurrentQuestion(prev => prev + 1)
  }

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
        <>
          <div>question {count} / 10</div>
          <div>{quizData.HTML[currentAnswer].answers}</div>
          {count !== 10 ?
          <button onClick={() => test()}>click</button> : <div><button >click</button></div>}
        </>
      ) : article === 'CSS' ? (
        <>
          <div>question {count} / 10</div>
          <div>{quizData.CSS[currentAnswer].answers}</div>
          {count !== 10 ?
          <button onClick={() => test()}>click</button> : <div><button >click</button></div>}
        </>
      ) : article === 'JS' ? (
        <>
          <div>question {count} / 10</div>
          <div>{quizData.JavaScript[currentAnswer].answers}</div>
          {count !== 10 ?
          <button onClick={() => test()}>click</button> : <div><button >click</button></div>}
        </>
      ) : (
          <>
          <div>question {count} / 10</div>
          <div>{quizData.Accessibility[currentAnswer].answers}</div>
          {count !== 10 ?
          <button onClick={() => test()}>click</button> : <div><button >click</button></div>}
          </>
      )}
      
    </div>
  )
}

export default AnswerBlock
import React, { useState } from 'react'
import './AnswerBlock.scss'
import { quizData } from '../../quizData'
import html from '../../img/html.svg'
import css from '../../img/css.svg'
import java from '../../img/javascript.svg'
import body from '../../img/body.svg'

const AnswerBlock = () => {
  const [article, setArticle] = useState('')

  const getArticle = (item) => {
    setArticle(item)
    
  }

  return (
    <div className='wrapper'>
      {article === '' ? (
        <>
          <button className='button' onClick={() => getArticle('html')}>
            <div className='button__innerBlock'>
              <div className='button__innerBlock_html'>
                <img src={html}/>
              </div>
              <div>HTML</div>
            </div>
          </button>

          <button className='button' onClick={() => getArticle('css')}>
            <div className='button__innerBlock'>
              <div className='button__innerBlock_css'>
                <img src={css}/>
              </div>
              <div>CSS</div>
            </div>
          </button>

          <button className='button' onClick={() => getArticle('java')}>
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
      ) : (
        <>
        </>
      )}
      
    </div>
  )
}

export default AnswerBlock
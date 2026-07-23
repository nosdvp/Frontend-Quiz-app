import './App.css';
import { useState } from 'react';
import ChangeLight from './component/ChangeLight/ChangeLight';
import QuestionBlock from './component/QuestionBlock/QuestionBlock';
import AnswerBlock from './component/AnswerBlock/AnswerBlock'

function App() {

  const [light, setLight] = useState(false)
  const [question, setQuestion] = useState(null)
  const [article, setArticle] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [count, setCount] = useState(1)
  const [countSuccessAnswer, setCountSuccessAnswer] = useState(0)
  const [resultArticle, setResultArticle] = useState('')

  return (
    <div className={light === false ? "wrapperDark" : "wrapperLight"}>
      <div className={light === false ? 'circleBlock-leftDark' : 'circleBlock-leftLight'}></div>
      <div className={light === false ? 'circleBlock-rightDark' : 'circleBlock-rightLight'}></div>
      <div className='contentWrapper'>
        <ChangeLight
          light = {light}
          article = {article}
          
          setLight = {setLight}
        />
        <div className='conctentBlock'>
          <QuestionBlock
            light = {light}
            article = {article}
            currentQuestion = {currentQuestion}
            count = {count}
            countSuccessAnswer = {countSuccessAnswer}
            resultArticle = {resultArticle}

            setArticle = {setArticle}
          />
          <AnswerBlock
            article = {article}
            count = {count}
            currentQuestion = {currentQuestion}
            countSuccessAnswer = {countSuccessAnswer}

            setArticle = {setArticle}
            setCurrentQuestion = {setCurrentQuestion}
            setCount = {setCount}
            setCountSuccessAnswer = {setCountSuccessAnswer}
            setResultArticle = {setResultArticle}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

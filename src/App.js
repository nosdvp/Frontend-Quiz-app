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

  return (
    <div className={light === false ? "wrapperDark" : "wrapperLight"}>
      <div className={light === false ? 'circleBlock-leftDark' : 'circleBlock-leftLight'}></div>
      <div className={light === false ? 'circleBlock-rightDark' : 'circleBlock-rightLight'}></div>
      <div className='contentWrapper'>
        <ChangeLight
          light = {light}
          setLight = {setLight}
        />
        <div className='conctentBlock'>
          <QuestionBlock
            light = {light}
            article = {article}
            currentQuestion = {currentQuestion}
            
          />
          <AnswerBlock
            article = {article}
            setArticle = {setArticle}
          
            setCurrentQuestion = {setCurrentQuestion}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react'
import './ChangeLight.scss'
import sun from '../../img/sun-svgrepo-com.svg'
import moon from '../../img/night-moon-svgrepo-com.svg'
import { quizData } from '../../quizData'
import html from '../../img/html.svg'
import css from '../../img/css.svg'
import java from '../../img/javascript.svg'
import body from '../../img/body.svg'

const ChangeLight = ({ light, setLight, article}) => {

    const makeLight = () => setLight(true)
    const makeDark = () => setLight(false)

  return (
        <div className='ChangeLight'>
            <div className='ChangeLight__blockNameTest'>
                {article === 'HTML' ? (
                    <>
                        <div className='ChangeLight__blockNameTest_html'>
                            <img src={html}/>
                        </div>
                        <div>HTML</div>
                    </>
                ) : article === 'CSS' ? (
                    <>
                        <div className='ChangeLight__blockNameTest_css'>
                            <img src={css}/>
                        </div>
                        <div>CSS</div>
                    </>
                ) : article === "JS" ? (
                    <>
                        <div className='ChangeLight__blockNameTest_java'>
                            <img src={java}/>
                        </div>
                        <div>JavaScript</div>
                    </>
                ) : article === 'body' ? (
                    <>
                        <div className='ChangeLight__blockNameTest_body'>
                            <img src={body}/>
                        </div>
                        <div>Accessibility</div>
                    </>
                ) : (
                    <></>
                )}
            </div>
            <div className='ChangeLight__blockBTN'>
                <img src={sun} onClick={makeLight}/>
                <div className={light === false ? 'ChangeLight__blockBTN_toggleDark' : 'ChangeLight__blockBTN_toggleLight'}>
                    <div className='circle'></div>
                </div>
                <img src={moon} onClick={makeDark}/>
            </div>
        </div>
    
  )
}

export default ChangeLight
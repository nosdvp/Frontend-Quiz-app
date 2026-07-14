import React from 'react'
import './ChangeLight.scss'
import sun from '../../img/sun-svgrepo-com.svg'
import moon from '../../img/night-moon-svgrepo-com.svg'

const ChangeLight = ({ light, setLight}) => {

    const makeLight = () => setLight(true)
    const makeDark = () => setLight(false)

  return (
    <div className='ChangeLight'>
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
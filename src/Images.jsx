import sadparker from './assets/peter-parker-sad.png'
import happyparker from './assets/peter-parker-happy.png'
import balloon from './assets/balloon.png'
import boom from './assets/boom.png'
import { useState } from 'react'





let balloonHeight = 100
function Images() {

  let displayNone = 'none';
  let displayBlock = 'inline';
  let [numberOfClicks, setNumberOfClicks] = useState(100)
  
function displayElement (){
    let nextCount = numberOfClicks + 1
  setNumberOfClicks(nextCount)
  balloonHeight += nextCount

  return balloonHeight
  }
  return (
    <>
    <h2>Segíts Peter Parkernek felfújni a lufiját!</h2>
<img style={{
  height: balloonHeight,
  display: balloonHeight>500 ? displayNone : displayBlock

    
}} src={balloon}/>
            <button onClick={displayElement}>Segít</button>

<img style={{
  display: balloonHeight>500 ? displayBlock : displayNone
  
}} src={boom}/>

<img className='image2' style={{
  display: balloonHeight>500 ? displayNone : displayBlock
}}src={happyparker}/>
<img className='image2' style={{
    display: balloonHeight>500 ? displayBlock : displayNone

}}src={sadparker}/>
    </>
  )
}
export default Images
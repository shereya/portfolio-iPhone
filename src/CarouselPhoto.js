import React from 'react'
import {useState,useEffect} from 'react'
import "./styles-photocar.css"
function CarouselPhoto() {
  let [count,setCount] = useState(1);
  var img1 = require('./Photos/img-1.jpg');
  var img2 = require('./Photos/img-2.jpg');
  var img3 = require('./Photos/pic-3.jpg');
  var img4 = require('./Photos/img-4.jpg');
  var img5 = require('./Photos/img-5.jpg');
  var img6 = require('./Photos/img-6.jpg');
  var img7 = require('./Photos/img-8.jpg');
  useEffect(()=>{
    const interval = setInterval(()=>{
      if(count>=1&&count<=7){
        setCount(count++);
      }
      else{
        setCount(1);
      }
    },5000)
    return () => clearInterval(interval)
  },[count])
  const handleNext = () =>{
    if(count>=1&&count<=7){
      setCount(count++);
    }
    else{
      setCount(1);
    }
  }
  const handlePrevious = () =>{
    if(count===1){
      setCount(7);
    }
    if(count===2){
      setCount(1);
    }
    if(count===3){
      setCount(2);
    }
    if(count===4){
      setCount(3);
    }
    if(count===5){
      setCount(4);
    }
    if(count===6){
      setCount(5);
    }
    if(count===7){
      setCount(6);
    }
  }
  if(count===1){
    return(
    <div>
      <img src={img1} id='image'></img>
      <div className='hover-con'>This picture was taken in Thanjavur in January 2022. Thanjavur is also my maternal home and is home away from home for me. </div>
      <div className='container'>
        <button className='l-bt' onClick={handlePrevious}> previous</button>
        <button className='r-bt' onClick={handleNext}> next </button>
      </div>
    </div>)
    }
  if(count===2){
    return(
    <div>
      <img src={img2} id='image'></img>
      <div className='hover-con'>Chennai, 2022. At my first ever college party. I had "too" much fun at this party XD. FYI, I was completely sober.</div>
      <div className='container'>
        <button className='l-bt' onClick={handlePrevious}> previous </button>
        <button className='r-bt' onClick={handleNext}> next </button>
      </div>
  </div>)
  }
  if(count===3){
    return(
      <div>
        <img src={img3} id='image'></img>
        <div className='hover-con'>Kumarakom Trip 2022 was straight out of a dream. The best food and it is one of the most favourite vacations that I have ever taken.</div>
        <div className='container'>
          <button className='l-bt' onClick={handlePrevious}> previous </button>
          <button className='r-bt' onClick={handleNext}> next </button>
        </div>
    </div>)
  }
  if(count===4){
    return(
      <div>
        <img src={img4} id='image'></img>
        <div className='hover-con'>This picture taken when the houseboat was docked for the evening in Kumarakom 2022 looks too unreal.</div>
        <div className='container'>
          <button className='l-bt' onClick={handlePrevious}> previous </button>
          <button className='r-bt' onClick={handleNext}> next </button>
        </div>
    </div>)
  }
  if(count===5){
    return(
      <div>
          <img src={img5} id='image'></img>
          <div className='hover-con'>San Francisco, 2023. Right before checking into the hotel after over 20 hours of flying, this picture was taken by yours truly.</div>
          <div className='container'>
            <button className='l-bt' onClick={handlePrevious}> previous </button>
            <button className='r-bt' onClick={handleNext}> next </button>
          </div>
    </div>)
  }
  if(count===6){
    return(
    <div>
      <img src={img6} id='image'></img>
      <div className='hover-con'>The picture is pretty self-explantory. It was taken in 2023 and boy was it HOT out there. </div>
      <div className='container'>
        <button className='l-bt' onClick={handlePrevious}> previous</button>
        <button className='r-bt' onClick={handleNext}> next </button>
      </div>
    </div>)
    }
    if(count===7){
      return(
      <div>
        <img src={img7} id='image'></img>
        <div className='hover-con'>Santa Monica Pier, Los Angeles, 2023. This place has my whole heart.</div>
        <div className='container'>
          <button className='l-bt' onClick={handlePrevious}> previous</button>
          <button className='r-bt' onClick={handleNext}> next </button>
        </div>
      </div>)
      }
}

export default CarouselPhoto
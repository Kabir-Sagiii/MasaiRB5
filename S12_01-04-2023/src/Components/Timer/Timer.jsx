import {useState,useRef} from 'react';

function Timer(props) {
      let timerId  = useRef(null)  // timerId = {current:null}
        let h2Ref  =   useRef(null) //h2Ref = {current:null}
        let btnRef = useRef(null)
        let btnRef1 = useRef(null)
    const [timer,setTimer] = useState(0)

    console.log(timerId)
   

    const startTimer = ()=>{
            h2Ref.current.style.color="green"
            btnRef.current.style.color ="green"
          timerId.current   =  setInterval(()=>{  // timerid = 1
                    setTimer(prevTimer=>prevTimer + 1) // timer + re-render
               },1000)
    }

    const stopTimer = ()=>{
        btnRef1.current.style.color = "red"
       // h2Ref.current = document.getElementById()
         h2Ref.current.style.color = "red"
           clearInterval(timerId.current)
    }

    return (
        <div>
            <h2 ref={h2Ref}>Timer : {timer}</h2>
            <button ref={btnRef} onClick={startTimer}>Start</button>&nbsp;&nbsp;&nbsp;
            <button ref={btnRef1} onClick={stopTimer}>Stop</button>
        </div>
    );
}

export default Timer;
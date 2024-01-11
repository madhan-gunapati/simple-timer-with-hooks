import { useEffect, useState } from "react"




const SimpleTimer = ()=>{
    const [time, setTime] = useState({minutes:0 , seconds : 0 , stopId: null  })
    const [input , setInput] = useState({inputMinutes:0 , inputSeconds:0 , allowInput:false});
  
    

    
   
   
    useEffect( 
        ()=>{
            return ()=>{clearInterval(time.stopId)}
        }
        
        , [])

        function startTimer(){
            function RunTimer(){
                setTime((p)=>{
                    const {minutes , seconds} = p 
                    if(seconds +1 <=59){
                        return ({...p , seconds : p.seconds +1})
                    }
                    else{
                        return ({minutes:p.minutes + 1, seconds:0})
                    }
                })
            }
            let StopId = setInterval(RunTimer  , 1*1000);
            setTime((p)=>({...p , stopId: StopId}))
        }
       

        function stopTimer(){
            
            clearInterval(time.stopId)
        }

        function setInputTime(){
            setInput((p)=>({...p , allowInput:true}))
        }
        function finalizeTime(){
            setInput((p)=>({...p , allowInput:false}))
        }
        function changeInputMinutes(e){
            if(typeof(e.target.value) === Number ){
                if(e.target.value <=59){
                    setInput((p)=>({...p , inputMinutes:e.target.value}))
                }
            }
            
        }

    return <div>
        <h1>Simple Timer</h1>
        <h3>{time.minutes} : {time.seconds}</h3>
        <p>Runs as long as it is less than an hour</p>
        
        <button type='button' onClick = {startTimer}>Start</button>
        <button type='button' onClick={stopTimer} >Stop</button>
        <button type='button' onClick={setInputTime}>Set Time</button>
        {
            input.allowInput ? <div>
                <input type='text' onChange={changeInputMinutes} value={input.minutes} placeholder="input minutes" />
                <input type='text' placeholder="input seconds" />
                <button type='button' onClick={finalizeTime}>Ok Set</button>
                 </div> : null
        }
    </div>
}

export default SimpleTimer



import React, { useEffect, useState } from 'react'

function Watch(){
    const [time, setTime] = useState(8*86400 + 23*3600 + 55*60 + 2);
    let toFlip = ['seconds'];
    const getTime = (time) => {
        const getSeconds = `0${(time % 60)}`.slice(-2)
        const minutes = `${Math.floor(time / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(time / 3600)}`.slice(-2)
        const getDays = `0${Math.floor(time / 86400)}`.slice(-2)
        return {
            days: getDays,
            hours: getHours,
            minutes: getMinutes,
            seconds: getSeconds
        }
      }
    useEffect(()=>{
        const Interval = setInterval(()=>{
            setTime((time)=>time-1)
            const oldTime = time-1;
            if(getTime(oldTime).minutes !== getTime(time).minutes){
                toFlip.push('minutes');
            }
            if(getTime(oldTime).hours !== getTime(time).hours){
                toFlip.push('hours');
            }
            if(getTime(oldTime).days !== getTime(time).days){
                toFlip.push('days');
            }
        },1000)
        return ()=>{
            clearInterval(Interval);
        }
    })
    useEffect(()=>{
        const Interval2 = setInterval(()=>{
            toFlip.forEach(val=>{
                let i = document.getElementsByClassName(`${val} lower`)[0];
                i.classList.toggle("flipped")
                i.classList.toggle("turned")
            })
        },500)
        return ()=>{
            clearInterval(Interval2)
        }
    })
    return(
        <div className="stop-watch">
            <div className="wrapper">
                <div className="days upper">
                    {getTime(time).days}
                </div>
                <div className="days lower">
                    {getTime(time).days}
                </div>
                <div className="days page">
                    {getTime(time).days}
                </div>
                <p className="title">DAYS</p>
            </div>
            <div className="wrapper">
                <div className="hours upper">
                    {getTime(time).hours}
                </div>
                <div className="hours lower">
                    {getTime(time).hours}
                </div>
                <div className="days page">
                    {getTime(time).hours}
                </div>
                <p className="title">HOURS</p>
            </div>
            <div className="wrapper">
                <div className="minutes upper">
                    {getTime(time).minutes}
                </div>
                <div className="minutes lower">
                    {getTime(time).minutes}
                </div>
                <div className="days page">
                    {getTime(time).minutes}
                </div>
                <p className="title">MINUTES</p>
            </div>
            <div className="wrapper">
                <div className="seconds upper">
                    {getTime(time).seconds}
                </div>
                <div className="seconds lower">
                    {getTime(time).seconds}
                </div>
                <div className="days page">
                    {getTime(time).seconds}
                </div>
                <p className="title">SECONDS</p>
            </div>
        </div>
    )
}

export default Watch;
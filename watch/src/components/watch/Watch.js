import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

function Watch(){
    const [time, setTime] = useState(8*86400 + 23*3600 + 55*60 + 2);
    let toFlip = ['seconds'];
    const refs = {
        days: React.useRef(),
        hours: React.useRef(),
        minutes: React.useRef(),
        seconds: React.useRef()
    }
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
        const Interval2 = setInterval(()=>{
            toFlip.forEach(val=>{
                refs[val].current.classList.toggle("flipped");
                refs[val].current.classList.toggle("turned");
            })
        },500)
        return ()=>{
            clearInterval(Interval);
            clearInterval(Interval2)
        }
    })
    return(
        <div className="stop-watch">
            <div className="wrapper">
                <div className="days upper">
                    {getTime(time).days}
                </div>
                <div className="days lower" ref={refs.days}>
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
                <div className="hours lower" ref={refs.hours}>
                    {getTime(time).hours}
                </div>
                <div className="hours page">
                    {getTime(time).hours}
                </div>
                <p className="title">HOURS</p>
            </div>
            <div className="wrapper">
                <div className="minutes upper">
                    {getTime(time).minutes}
                </div>
                <div className="minutes lower" ref={refs.minutes}>
                    {getTime(time).minutes}
                </div>
                <div className="minutes page">
                    {getTime(time).minutes}
                </div>
                <p className="title">MINUTES</p>
            </div>
            <div className="wrapper">
                <div className="seconds upper">
                    {getTime(time).seconds}
                </div>
                <div className="seconds lower" ref={refs.seconds}>
                    {getTime(time).seconds}
                </div>
                <div className="seconds page">
                    {getTime(time).seconds}
                </div>
                <p className="title">SECONDS</p>
            </div>
        </div>
    )
}

export default Watch;
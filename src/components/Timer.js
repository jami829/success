import React, { useEffect, useState } from 'react';

function Timer(props) {


  // 렌더가 될 상태값
  const [day, setDay] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  // 디데이 계산 
  const countDay = () => {

    let today = new Date();
    let dDay = new Date(props.time); // ex) Sun Jul 04 2021 12:34:43 GMT+0900 로 변환이 된다.

    // 디데이 연산의 편의성을 위해 디데이 날짜와 오늘 날짜 모두 밀리세컨드로 변환시킨다.
    today = today.getTime();
    dDay = dDay.getTime();

    // 위의 밀리세컨드를 이용한다.
    // dDay밀리세컨드에서 현재 세컨드를 뺀다.
    let gap = dDay - today;


    // 남은 시간을 일 단위로 계산한 다음, 오늘 날짜까지 포함시키기 위해 Math.ceil()을 사용한다.
    // Math.ceil() ==> 소수점 첫째 자리에서 무조건 올림하여 정수로 반환
    // 1초 = 1000msc
    // 1분(60초) = 1000*60
    // 1시간(60분) = 1000*60*60
    // 1일(60분*24) = 1000*60*60*24

    let d = Math.ceil(gap / (1000 * 60 * 60 * 24));
    let h = Math.ceil(gap % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let m = Math.ceil(gap % (1000 * 60 * 60) / (1000 * 60));
    let s = Math.ceil(gap % (1000 * 60) / 1000);

    setDay(d);
    setHours(h);
    setMinutes(m);
    setSeconds(s);

  }


  useEffect(() => {
    const interval = setInterval(() => {
      countDay();
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, [seconds])

  return (
    <div>
      D-{day} {hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds} 남음
    </div>
  )
}

export default Timer;
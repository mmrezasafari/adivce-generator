import { useEffect, useState } from "react";
import svg from "../assets/image/icon-dice.svg";
import style from "../assets/style/style.css";

const { Card, Button } = require("antd");

function AdviceCard() {
  const [advice, setAdvice] = useState({
    id: null,
    advice: null,
  });

  const [counter, setCounter] = useState(0);

  const getAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setAdvice(data.slip);
      })
      .catch((err) => {});
  };

  useEffect(()=> {
      getAdvice();
      setCounter(counter + 1)
  }, []);

  const handleOnClick = () => {
      getAdvice() ;
      setCounter(counter + 1)
  }


  return (
    <div className="advice-card">
      <Card className="card-component" style={{width: "100%" ,height:"100%"}}>
        <div className="advice-info" style={{height:"150px"}}>
          <p style={{color:"#52ffa8", marginBottom:"60px"}}>ADVICE #{counter}</p>
          <h3 style={{color:"whitesmoke"}}>"{advice.advice}"</h3>
        </div>
        <div className="br-line">
          <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
              <g transform="translate(138)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>
        </div>
        <div className="button-change"> 
          <Button
            onClick={handleOnClick}
            icon={<img src={svg} />}
            style={{width:"60px", height:"60px" ,border:"none", borderRadius:"50%", backgroundColor:"#52ffa8", position:'absolute', bottom:'-30px', right:"259px"}}
          />
        </div>
      </Card>
    </div>
  );
}

export default AdviceCard;

import { useParams } from "react-router-dom";
import './style.css';
import api from "../../../Services";
import { useEffect, useState } from "react";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";



export default function ItemQuestions() {
  const { id } = useParams()
  const [questionsItemBd, setQuestionsItemBd] = useState([])

  async function fetchData() {
    try {
      const response = await api.get(`questions/search?item=${id}`)
      const res = (response.data.questions).slice(0,4)
      setQuestionsItemBd(res)
      console.log(res)
    } catch (error) {
      console.error("Error data:", error)
    }
  }

  useEffect(() => {
    fetchData();
  }, [id]); 
  return (
    <div>
     <div className="container-questions-item">
      <h3>
        Perguntas e respostas
      </h3>
      {questionsItemBd.map((item) => (
  <div className="card-questions-item" key={item.text}>
    <div className="question--item">
      <div>{item.date_created && new Date(item.date_created).toLocaleString()}</div>
      <div>{item.text}</div>
    </div>
    
    <div className="answer-questions-item">
      <div className="icon-questions-item"><MdOutlineSubdirectoryArrowRight/></div>
      <div>
        {item.answer && (
          <>
            <div>{item.answer.date_created ? new Date(item.answer.date_created).toLocaleString() : 'Sem resposta'}</div>
            <div>{item.answer.text}</div>
          </>
        )}
      </div>
    </div>
  </div>
))}

      
     </div>
    </div>
  );
}

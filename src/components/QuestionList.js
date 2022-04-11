import React, { useEffect, useState } from "react";
// import QuestionItem from './QuestionItem';

function QuestionList() {
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(r => {
        console.log(r); //ok is true
        if (!r.ok) { throw Error('could not fetch data for that resource') }
        return r.json() })
      .then((data) => {setQuestion(data)}) // returning undefined
      .catch(err => console.log(err.message));
      // console.log(data);
      // console.log(question);
  }, []);

  // function handleDelete (id) { 
  //   fetch('http://localhost:4000/questions/' + id, {
  //     method: 'DELETE'
  //   }).then(()=> {console.log("delete request sent")})
  // }
 
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul> 
         { question && question.map(q => (
      <li key={q.id}>
        <h4>Question {q.id}</h4>
        
        <h5>Prompt: {q.prompt}</h5>
  
        <label>
          Correct Answer:
          <select defaultValue={q.correctIndex}> 
            {q.answers.map((answer, index) => (
              <option key={index} value={index}>
                {answer}
              </option>
            )) }
          </select>
        </label>
  
        <button >Delete Question</button>
      </li>)
    ) }
         </ul> 
    </section>
  );
}

export default QuestionList;

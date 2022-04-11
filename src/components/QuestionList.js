import React, { useEffect, useState } from "react";
import QuestionItem from './QuestionItem';

function QuestionList() {
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(r => {
        console.log(r); //ok is true
        if (!r.ok) { throw Error('could not fetch data for that resource') }
        return r.json()
      })
      .then((data) => { setQuestion(data) }) // returning undefined
      .catch(err => console.log(err.message));
    // console.log(data);
    // console.log(question);
  }, []);

  function handleDelete(id) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'DELETE'
    }).then(() => { console.log(`delete request sent for id ${id}`) })
  }

 
  // {
  //   fetch(`http://localhost:4000/questions/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((r) => r.json())
  //     .then(() => {
  //       const updatedQuestions = questions.filter((q) => q.id !== id);
  //       setQuestions(updatedQuestions);
  //     });
  // }
  const list = question && question.map(q => (
    <li key={q.id}>
      <QuestionItem q={q}  handleDelete={handleDelete}/>
    </li>)
  )
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {list}
      </ul>
    </section>
  )
  ;
}

export default QuestionList;

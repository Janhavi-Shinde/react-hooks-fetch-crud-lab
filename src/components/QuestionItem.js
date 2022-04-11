import React from "react";

function QuestionItem({q, handleDelete}) {
  // console.log(question); // array of 6 objects
  // const [ one , two, three, four, five, six] = question
  // console.log(one);
  // const [{ id, prompt, answers, correctIndex }] = question;
  // console.log(answers); //undefined

  // console.log({question});
  // const answerB = question.map(q => q.answers);
  // const idB = question.map(q => q.id);
  // const promptB = question.map(q => q.prompt);
  // const correctIndexB = question.map(q => q.correctIndex);
  
  // function handlePatch(){
  //   fetch(`http://localhost:4000/questions/${id}`, {
  //     method: 'PATCH',
  //     headers: {'Content-Type': 'application/JSON'},
  //     body: {
  //       "correctIndex": integer
  //     } 
  //   })
  // }
  return (
    <> 
    <h4>Question {q.id}</h4>
    
    <h5>Prompt: {q.prompt}</h5>
    
    <label htmlFor="selectAnswers">
      Correct Answer:
    </label>
    
    <select name="selectAnswers"  defaultValue={q.correctIndex} >
      {q.answers.map((answer, index) => (
        <option key={index} value={index}>
          {answer}
        </option>
      ))}
    </select>
    <br></br>
    
    <button onClick={() => handleDelete(q.id)}>Delete Question</button>
    </>)
}







export default QuestionItem;

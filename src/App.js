import './App.css'
import { useState, useEffect } from 'react';
import StudentsScore from './Students.js';
import AverageScore from './GPA.js';

function App() {
  const [students, setStudents] = useState([
    { name: 'Андрій', score: 200 },
    { name: 'Світлана', score: 100 },
    { name: 'Людмила', score: 200 },
    { name: 'Іван', score: 200 },
  ]);
  const [averagePoint, setAveragePoint] = useState(0);
  useEffect(() => {
    const scoreAverange =
      students.reduce((acc, student) => student.score + acc, 0) /
      students.length;
    setAveragePoint(scoreAverange);
  }, [students]);
  const inputChange = elem => {
    const { name, value } = elem.target;
    setStudents(previousStudent => {
      const updatedStudents = previousStudent.map(student => {
        if (student.name === name) {
          return { ...student, score: Number(value) };
        }
        return student;
      });

      return updatedStudents;
    });
  };
  return (
    <><h1>Рейтинг студентів</h1>
      <AverageScore average={averagePoint} />
      <table className='container'>
        <tbody>
          <StudentsScore students={students} valueChange={inputChange} />
        </tbody>
      </table></>
  );
}

export default App;
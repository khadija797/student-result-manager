import React from 'react'
import './StudentCard.css'

const StudentCard = ({ student, deleteStudent, setEditStudent }) => {
  return (
      <div className='stu-card'>
        <h3>Name: {student.name}</h3>
        <p>Marks: {student.marks}</p>
        <p className={student.marks >= 50 ? "pass" : "fail"}>
          Result: {student.marks >= 50 ? "Pass" : "Fail"}
        </p>
        <button className='edit-btn' onClick={() => setEditStudent(student)}>Edit</button>
        <button className='del-btn' onClick={() => deleteStudent(student.id)}>Delete</button>
      </div>
  )
}

export default StudentCard
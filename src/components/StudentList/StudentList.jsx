import React from 'react'
import './StudentList.css'
import StudentCard from '../StudentCard/StudentCard'

const StudentList = ({ students, deleteStudent, setEditStudent}) => {
  return (
    <div className='stu-list' id='student-list'>
      <div className="stu-list-grid">
        {students.map((student) => (
            <StudentCard
              key={student.id}
              student = {student}
              deleteStudent= {deleteStudent}
              setEditStudent={setEditStudent}
            />
        ))}
      </div>
    </div>
  )
}

export default StudentList
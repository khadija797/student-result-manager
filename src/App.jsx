import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import StudentForm from './components/StudentForm/StudentForm'
import StudentList from './components/StudentList/StudentList'
import DashStats from './components/DashStats/DashStats'

const App = () => {

  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem("student")
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem("student", JSON.stringify(students))
  }, [students])

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  const clearAll = () => {
    setStudents([])
    localStorage.removeItem("student")
  }

  const addStudent = (student) => {
    setStudents([...students, student]
    )
  }

  const deleteStudent = (id) => {
    setStudents (
      students.filter((student) => student.id !==id)
    )
  }

  const [search, setSearch] = useState("")

  const [editStudent, setEditStudent] = useState(null)

  const updateStudent = (updatedStudent) => {
    setStudents(
      students.map((s) => 
        s.id === updatedStudent.id ? updatedStudent : s
      )
    )
    setEditStudent(null)
  }

  return (
    <div className='app'>
      <Header 
        search={search} 
        setSearch={setSearch}
        clearAll={clearAll} 
      />
      <StudentForm 
        addStudent ={addStudent}
        editStudent={editStudent}
        updateStudent={updateStudent}
        setEditStudent={setEditStudent} />
      <DashStats students={students} />
      <StudentList 
        students={students} 
        deleteStudent={deleteStudent}
        setEditStudent={setEditStudent} />
    </div>
  )
}

export default App
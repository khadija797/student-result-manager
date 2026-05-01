import React, { useEffect, useRef, useState } from 'react'
import './StudentForm.css'

const StudentForm = ({ addStudent, editStudent, updateStudent, setEditStudent }) => {

  const [name, setName] = useState("")
  const [marks, setMarks] = useState("")
  const marksRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name || !marks) return

    const studentData = {
      id: editStudent ? editStudent.id : Date.now(),
      name,
      marks: Number(marks)
    }

    if (editStudent) {
      updateStudent(studentData)
      setEditStudent(null)
    } else {
      addStudent(studentData)
    }

    setName("")
    setMarks("")
  }

  useEffect(() => {
    if (editStudent) {
      setName(editStudent.name)
      setMarks(editStudent.marks)
    }
  }, [editStudent])

  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder='Student Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            marksRef.current.focus()
          }
        }}
      />

      <input
        ref={marksRef}
        type="text"
        placeholder='Marks'
        value={marks}
        onChange={(e) => {
          const value = e.target.value
         if (/^\d*$/.test(value)) {
    setMarks(value)
  }
}}
      />

      <button type='submit'> {editStudent ? "Update Student" : "Add Student"}</button>
      {editStudent && (<button type='button' onClick={() => setEditStudent(null)}>Cancel</button>)}
    </form>
  )
}

export default StudentForm
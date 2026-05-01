import React from 'react'
import './DashStats.css'

const DashStats = ({ students }) => {

    const totalStudents = students.length
    const passedStudents = students.filter(
        (student) => student.marks >= 50
    ).length

    const failedStudents = students.filter(
        (student) => student.marks < 50
    ).length

    return (

        <div className='dash-container'>
            <div className='stat-card'>
                <h3>Total </h3>
                <p>{totalStudents}</p>
            </div>
            <div className='stat-card'>
                <h3>Passed</h3>
                <p className='pass'>{passedStudents}</p>
            </div>
            <div className='stat-card'>
                 <h3>Failed</h3>
                <p className='fail'>{failedStudents}</p>
            </div>
        </div>
    )
}

export default DashStats
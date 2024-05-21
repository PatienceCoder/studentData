import { useEffect, useState } from 'react'
import './App.css'
import gsap from 'gsap'
function App() {
  const [rollNo,setRollNo] = useState('');
  const [student,setStudent] = useState(null);
  const [shouldAnimate,setShouldAnimate] = useState(false);
  useEffect(() => {
    if(student && shouldAnimate){
      gsap.from('.student-details',{
        opacity:0,
        ease:'elastic',
        y:-100
      })
      gsap.from('.student-details p',{
        opacity:0,
        rotate:360,
        stagger:1,
      })

    }
  },[shouldAnimate,student])
  async function callAPI(){
    const response = await fetch(`http://127.0.0.1:5000/getdetails/${rollNo}`)
    if(response.ok){
      const data = await response.json();
      setStudent(data);
      setShouldAnimate(true)
    }
    else{
      return alert("Student not found..")
    }
  }
  return (
    <div className='container'>
        <div className="search-container">
          <input type="text" onChange={(event) => setRollNo(event.target.value)} placeholder='Enter Registration Number' />
          <button onClick={callAPI}>Search</button>
        </div>
        {
          student && 
          <div className="student-details">
            <p>Registration Number : {student.rollNo}</p>
            <p>Name : {student.fullName}</p>
            <p>Gender : {student.gender}</p>
            <p>Branch : {student.branch}</p>
            <p>Course : {student.course}</p>
          </div>
        }
    </div>
  )
}

export default App

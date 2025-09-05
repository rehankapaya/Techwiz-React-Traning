import React, { useState } from 'react'
import NavbarComponent from '../components/NavbarComponent'
import FooterComponent from '../components/FooterComponent'

export default function FeedbackPage() {

  const [username, setUsername] = useState('')
  const [email, setemail] = useState('')
  const [comments, setcomments] = useState('')
  const [feedbacks, setfeedbacks] = useState(JSON.parse(localStorage.getItem('feedbacks')) || [])


  console.log(feedbacks)

  function handleSubmit(e) {

    e.preventDefault()

    let newFeedback = {
      username,
      email,
      comments
    }

    setfeedbacks(prev => [newFeedback, ...prev])
    console.log(newFeedback)
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks))
  }


  return (
    <div>
      <NavbarComponent />


      <form
        onSubmit={handleSubmit}
        style={{ width: "80%", margin: "20px auto", justifyContent: "space-between", height: "400px", display: "flex", flexDirection: "column" }}>

        <h1>Feedback Form</h1>
        <input type="text" name="username" required onChange={(e) => setUsername(e.target.value)} id="" placeholder='Enter Username' />
        <input type="email" required placeholder='Enter Email' onChange={(e) => setemail(e.target.value)} />
        <textarea name="" id="" onChange={(e) => setcomments(e.target.value)} placeholder='Type here...' rows={10}></textarea>
        <input type="submit" style={{ backgroundColor: "black", color: 'white' }} />
      </form>


      <div className="feedbacks">
        <h1>User Feedback</h1>
        {
          feedbacks.map((f) => {
            return <div>


              <h1>{ f.username}</h1>
              <h5>{f.email}</h5>
              <p>{f.comments}</p>

            </div>
          })
        }
      </div>
      <FooterComponent />
    </div>
  )
}

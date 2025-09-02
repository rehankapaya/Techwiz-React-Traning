import React, { useState } from 'react'
import NavbarComponent from '../components/NavbarComponent'

export default function ContactPage() {
  const [email, setemail] = useState('')
  const [username, setusername] = useState('')
  const [comments, setcomments] = useState('')
  const [acceptPolicy, setacceptpolicy] = useState(false)


  function handleSubmit() {

    let newFeedback = {
      username,
      email,
      comments,
      policyAccepted: acceptPolicy
    }
    console.log(newFeedback)



    setcomments('')
    setemail('')
    setusername('')
    setacceptpolicy(false)
  }


  return (
    <>
    <NavbarComponent/>
    <div className="container mt-5">
      <h2>Contact Us</h2>
      <div className="mb-3">
        <label className="form-label">Username</label>
        <input type="text" className="form-control" value={username} placeholder='Username' onChange={(e) => setusername(e.target.value)} />
      </div>

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" value={email} placeholder='Enter Email' onChange={(e) => setemail(e.target.value)} />
      </div>

      <div className="form-check mb-3">
        <input type="checkbox" className="form-check-input" checked={acceptPolicy} onChange={(e) => setacceptpolicy(e.target.checked)} />
        <label className="form-check-label">Accept Policy</label>
      </div>

      <div className="mb-3">
        <label className="form-label">Comments</label>
        <textarea className="form-control" value={comments} placeholder='Enter Comments' onChange={(e) => setcomments(e.target.value)} rows="4"></textarea>
      </div>

      <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </div>
    </>
  )
}

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
      policyAccepted:acceptPolicy
    }
    console.log(newFeedback)



    setcomments('')
    setemail('')
    setusername('')
    setacceptpolicy(false)
  }


  return (
    <div>
      <NavbarComponent />

      ContactPage

      <br />

      <input type="text" value={username} placeholder='username' onChange={(e) => setusername(e.target.value)} />
      <br />
      <input type="email" value={email} placeholder='Enter Email' onChange={(e) => setemail(e.target.value)} />
      <br />
      Accept Policy <input type="checkbox" name="policy" checked={acceptPolicy} id="" onChange={(e)=>setacceptpolicy(e.target.checked)} />
      <textarea name="" value={comments} placeholder='Enter Comments' onChange={(e) => setcomments(e.target.value)} id=""></textarea>


      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

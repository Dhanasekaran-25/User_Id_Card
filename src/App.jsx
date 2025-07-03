import { useState } from 'react'
import './App.css'
import User from './assets/User'

function App() {
  const [formData, setFormData] = useState({
    companyname: '',
    slogan: '',
    name: '',
    jobposition: '',
    number: '',
    email: '',
    address: '',
    website: '',
    photo: ''
  })

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData({ ...formData, [id]: value })
  }

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const imageURL = URL.createObjectURL(file)
      setFormData({ ...formData, photo: imageURL })
    }
  }

  const handleReset = () => {
    setFormData({
      companyname: '',
      slogan: '',
      name: '',
      jobposition: '',
      number: '',
      email: '',
      address: '',
      website: '',
      photo: ''
    })
  }

  return (
    <div className="container">
      <form className="form">
        <h1>Company Details Form</h1>

        <label htmlFor="companyname">Company Name:</label>
        <input id="companyname" value={formData.companyname} onChange={handleChange} />

        <label htmlFor="slogan">Company Slogan:</label>
        <input id="slogan" value={formData.slogan} onChange={handleChange} />

        <label htmlFor="name">Name:</label>
        <input id="name" value={formData.name} onChange={handleChange} />

        <label htmlFor="jobposition">Position:</label>
        <input id="jobposition" value={formData.jobposition} onChange={handleChange} />

        <label htmlFor="number">Mobile:</label>
        <input id="number" value={formData.number} onChange={handleChange} />

        <label htmlFor="email">Email:</label>
        <input id="email" value={formData.email} onChange={handleChange} />

        <label htmlFor="website">Website:</label>
        <input id="website" value={formData.website} onChange={handleChange} />

        <label htmlFor="address">Address:</label>
        <input id="address" value={formData.address} onChange={handleChange} />

        <label htmlFor="photo">Photo:</label>
        <input type="file" accept="image/*" onChange={handlePhotoUpload} />

        <button type="button" onClick={handleReset}>Reset</button>
      </form>

      <User {...formData} />
    </div>
  )
}

export default App

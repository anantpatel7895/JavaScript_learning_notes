import { useState } from 'react'
import './FormPage.css'

interface FormData {
  name: string
  email: string
  password: string
  age: string
  gender: string
  country: string
  interests: string[]
  message: string
}

function FormPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    password: '',
    age: '',
    gender: '',
    country: '',
    interests: [],
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  console.log('FormPage rendered', formData)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, value]
        : prev.interests.filter(item => item !== value)
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        password: '',
        age: '',
        gender: '',
        country: '',
        interests: [],
        message: ''
      })
    }, 3000)
  }

  return (
    <div className="form-container">
      <h1>Registration Form</h1>
      
      {submitted && (
        <div className="success-message">
          ✅ Form submitted successfully!
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={6}
            placeholder="Min 6 characters"
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            min="1"
            max="120"
            placeholder="Enter your age"
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="country">Country</label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select country</option>
            <option value="usa">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="canada">Canada</option>
            <option value="india">India</option>
            <option value="australia">Australia</option>
          </select>
        </div>

        <div className="form-group">
          <label>Interests</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                value="coding"
                checked={formData.interests.includes('coding')}
                onChange={handleCheckboxChange}
              />
              Coding
            </label>
            <label>
              <input
                type="checkbox"
                value="design"
                checked={formData.interests.includes('design')}
                onChange={handleCheckboxChange}
              />
              Design
            </label>
            <label>
              <input
                type="checkbox"
                value="music"
                checked={formData.interests.includes('music')}
                onChange={handleCheckboxChange}
              />
              Music
            </label>
            <label>
              <input
                type="checkbox"
                value="sports"
                checked={formData.interests.includes('sports')}
                onChange={handleCheckboxChange}
              />
              Sports
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Tell us something about yourself..."
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit Form
        </button>
      </form>

      <div className="form-data">
        <h3>Form Data (Real-time):</h3>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  )
}

export default FormPage
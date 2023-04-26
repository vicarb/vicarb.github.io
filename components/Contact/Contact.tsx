import React from 'react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData);
    
    try {
      const response = await fetch('https://singular-marzipan-df9366.netlify.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        console.log('Message sent successfully!')
        setFormData({
          name: '',
          email: '',
          message: ''
        })
      } else {
        console.error('Failed to send message:', response.statusText)
      }
    } catch (error) {
      console.error('Failed to send message:', error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  }

  return (
    <div className="a p-12 sm:px-6 lg:px-8">
    <div className="max-w-md md:max-w-lg mx-auto bg-blue-500 rounded-md shadow-md overflow-hidden">
      <h2 className="text-center text-3xl font-semibold py-6 text-slate-50">Contact Me!</h2>
      <form onSubmit={handleSubmit} className="px-8 py-6 space-y-6 bg-blue-500">
        <div>
          <label htmlFor="name" className="block text-slate-100 font-medium mb-2 text-lg">Name</label>
          <input type="text" id="name" name="name" className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-4 text-gray-800 text-lg" required value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email" className="block text-slate-100 font-medium mb-2 text-lg">Email</label>
          <input type="email" id="email" name="email" className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-4 text-gray-800 text-lg" required value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="message" className="block text-slate-100 font-medium mb-2 text-lg">Message</label>
          <textarea id="message" name="message" rows={5} className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-4 text-gray-800 text-lg" required value={formData.message} onChange={handleChange}></textarea>
        </div>
        <div>
          <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-md text-lg">Send Message</button>
        </div>
      </form>
  </div>
</div>



  )
}

export default Contact;

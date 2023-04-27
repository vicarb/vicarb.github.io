import React from 'react'
import { useState } from 'react'

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true);
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
    setIsLoading(false);
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
      {isLoading && (
        <div className="flex justify-center items-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zM12 20a8 8 0 008-8h-4c0 3.042-1.135 5.824-3 7.938l-1.697-2.647zm3-10.709V4.786A7.962 7.962 0 0012 4a7.962 7.962 0 00-3 .592v4.902a4.001 4.001 0 016 0z"></path>
          </svg>
          <p className="text-white font-medium">Submitting...</p>
        </div>
      )}
    </form>
  </div>
</div>



  )
}

export default Contact;

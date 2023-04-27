import React from 'react'
import { useState } from 'react'

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const handleReset = () => {
    setFormData({name: '', email: '', message: ''}); // Reset form data
  }

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
        setIsSuccess(true);
        
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
    <div className="a p-4 sm:p-12 sm:px-6 lg:px-8">
  <div className="max-w-md md:max-w-lg mx-auto bg-blue-500 rounded-md shadow-md overflow-hidden">
    <h2 className="text-center text-3xl font-semibold py-6 text-slate-50">Contact Me!</h2>
    <form onSubmit={handleSubmit} className="px-4 sm:px-8 py-6 space-y-4 sm:space-y-6 bg-blue-500">
      <div>
        <label htmlFor="name" className="block text-slate-100 font-medium mb-2 text-lg">Name</label>
        <input type="text" id="name" name="name" className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-3 sm:px-4 text-gray-800 text-lg" required value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email" className="block text-slate-100 font-medium mb-2 text-lg">Email</label>
        <input type="email" id="email" name="email" className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-3 sm:px-4 text-gray-800 text-lg" required value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="message" className="block text-slate-100 font-medium mb-2 text-lg">Message</label>
        <textarea id="message" name="message" rows={5} className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-3 sm:px-4 text-gray-800 text-lg" required value={formData.message} onChange={handleChange}></textarea>
      </div>
      <div>
        <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-3 sm:px-4 rounded-md text-lg">Send Message</button>
      </div>
      {isLoading && (
        <div className="flex justify-center items-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M8 5v6h3v10h4V11h3V5M8 5H5v14h14v-7"></path>
          </svg>
          <p className="text-white font-medium">Submitting...</p>
        </div>
      )}
    </form>
    {isSuccess && (
      <div className="px-4 sm:px-8 py-4 sm:py-6 bg-green-500 text-white text-center">
        <p className="font-medium text-lg">Message sent!</p>
        <button onClick={() => {setIsSuccess(false); window.scrollTo(0, 0)}} className="mt-4 bg-white text-green-500 font-medium py-2 px-3 sm:px-4 rounded-md text-lg">Done</button>
      </div>
    )}
  </div>
</div>


  



  )
}

export default Contact;

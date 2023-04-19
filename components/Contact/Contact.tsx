import React from 'react'


const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
  }

  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8 rounded-md">
      <div className="max-w-md mx-auto  rounded-md shadow-md overflow-hidden bg-sky-100">
        <h2 className="text-center text-2xl font-bold pt-6">Contact Me!</h2>
        <form onSubmit={handleSubmit} className="p-6 space-y-6 bg-sky-100">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" required />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea id="message" name="message" rows="5" className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50" required></textarea>
          </div>
          <div>
            <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-md">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact;

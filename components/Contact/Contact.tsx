import React from 'react'


const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission logic here
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 a">
  <div className="max-w-md mx-auto bg-blue-500 rounded-md shadow-md overflow-hidden">
    <h2 className="text-center text-3xl font-semibold py-6 text-slate-100">Contact Me!</h2>
    <form onSubmit={handleSubmit} className="px-8 py-6 space-y-6 bg-blue-500">
      <div>
        <label htmlFor="name" className="block text-slate-100 font-medium mb-2 text-lg">Name</label>
        <input type="text" id="name" name="name" className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-4 text-gray-800 text-lg" required />
      </div>
      <div>
        <label htmlFor="email" className="block text-slate-100 font-medium mb-2 text-lg">Email</label>
        <input type="email" id="email" name="email" className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-4 text-gray-800 text-lg" required />
      </div>
      <div>
        <label htmlFor="message" className="block text-slate-100 font-medium mb-2 text-lg">Message</label>
        <textarea id="message" name="message" rows={5} className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-4 text-gray-800 text-lg" required></textarea>
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

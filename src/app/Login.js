"use client"
import React from 'react';
import { UserRound,ArrowRight  } from 'lucide-react';
import { useState } from 'react';
import { useEffect } from "react";
const RegistrationForm = () => {

 
    
  const [formData, setFormData] = useState({
    firstName: "",
  lastName: "",
  email: "",
  country: "India",  
  state: "Maharashtra", 
  countryCode: "🇮🇳", 
  password: "",
  });

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fullName = `${formData.firstName} ${formData.lastName}`.trim().toLowerCase();
    const enteredEmail = formData.email.trim().toLowerCase();
    const enteredPhone = formData.phone.replace(/[^0-9]/g, ""); 

    const userExists = users.some((user) => {
      const apiName = user.name.trim().toLowerCase();
      const apiEmail = user.email.trim().toLowerCase();
      const apiPhone = user.phone.replace(/[^0-9]/g, ""); 

      return apiName === fullName && apiEmail === enteredEmail && apiPhone === enteredPhone;
    });

    if (userExists) {
      alert("✅ User exists!");
    } else {
      alert("❌ User does not exist.");
    }
  };

  const slides = [
    { id: 1,title:'I barely had to do anything', 
            content: 'Slide 1:  Love the experience. Got my business set up and all necessary details in about a month and I barely had to do anything. Definitely recommend',
            name:'Catherine Johns' },

    { id: 2,title:'I barely had to do anything', 
            content: 'Slide 2:  Love the experience. Got my business set up and all necessary details in about a month and I barely had to do anything. Definitely recommend' ,
            name:'Tim Cook'},

    { id: 3,title:'I barely had to do anything', 
            content: 'Slide 3:  Love the experience. Got my business set up and all necessary details in about a month and I barely had to do anything. Definitely recommend' ,
            name:'Bill Gates'},
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex min-h-screen">
    {/*Left Panel*/}
    <div className="w-7/12 bg-blue-600 p-12 text-white">
      <div className="max-w-lg">
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Let's setup<br></br> your Operating Agreement
        </h1>
        <p className="text-base opacity-70 leading-relaxed mb-20">
          All-in-one solution to for your business in the state. Form a new company from scratch or onboard your existing US company.
        </p>
        
    {/* Slide Content */}
      <div className="mt-25 bg-blue-800 bg-opacity-60 rounded-xl p-6">
    <div className="bg-blue-700 bg-opacity-10 rounded-xl p-1">
    <p className='text-xl font-bold mb-3'>{slides[currentSlide].title}</p>
      <p className="mb-6 text-sm leading-relaxed opacity-80">{slides[currentSlide].content}</p>
      <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><UserRound  className='text-white'/></div>
            <span className="ml-3 font-medium">{slides[currentSlide].name}</span>
            <div className="ml-auto text-yellow-200">★ ★ ★ ★ ★</div>
          </div>
    </div>

     {/* Dot Navigation */}
      </div>
     <div className="flex justify-center mt-4">
      {slides.map((_, index) => (
        <div
          key={index}
          onClick={() => goToSlide(index)}
          className={`w-3 h-3 mx-2 rounded-full cursor-pointer ${
            currentSlide === index ? 'bg-gray-300' : 'bg-blue-500'
          }`}
        />
      ))}
    </div>
  </div>
    </div>

    {/* Right Side or form side */}
    <div className="w-full flex justify-center p-12">
  <div className="w-9/12 max-w-4xl"> {/* Increased width */}
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Let's get started</h2>

    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* Name Fields */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-gray-600 mb-2">First name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">Last name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Email Field */}
      <div>
        <label className="block text-sm text-gray-600 mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Country and State Fields */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-gray-600 mb-2">Country of residence</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option>India</option>
            <option>USA</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">State</label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option>Maharashtra</option>
            <option>Kerala</option>
            <option>Gujarat</option>
            <option>Assam</option>
          </select>
        </div>
      </div>

      {/* Phone Field */}
      <div>
        <label className="block text-sm text-gray-600 mb-2">Phone number</label>
        <div className="flex items-center px-2 py-2 border border-gray-300 rounded-lg">
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className="px-2 py-1 rounded-lg text-xl bg-transparent border-none focus:outline-none"
          >
            <option value="🇮🇳">🇮🇳</option>
            <option value="🇺🇸">🇺🇸</option>
          </select>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="flex-1 focus:outline-none px-2"
            placeholder="Enter phone number"
          />
        </div>
      </div>

      {/* Password Field */}
      <div>
        <label className="block text-sm text-gray-600 mb-2">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors"
      >
        <span>GET STARTED</span>
        <span>
          <ArrowRight />
        </span>
      </button>
    </form>
  </div>
</div>

    </div>
  );
}

export default RegistrationForm;
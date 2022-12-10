import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "react-hot-toast";


const Contact = () => {
    const form = useRef()

    const handleSendEmail = (event) =>{
        event.preventDefault();

    emailjs.sendForm('service_momn08v', 'template_hjomhhu', form.current, 'Ed5Q1Gr2Du1yLVLoi')
      .then((result) => {
        // console.log(result);
        //   console.log(result.text);
          if(result.status === 200){
            toast.success('Email Sent')
            event.target.reset()
          }
      }, (error) => {
          console.log(error.text);
      });

    }

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
          ref={form}
          onSubmit={handleSendEmail}
            
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              required
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              required
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button type="submit" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

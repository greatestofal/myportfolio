import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-[#0a192f] w-full h-screen flex justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/pbgxvjka"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#64ffda] text-gray-300">
            Contact
          </p>
          <p className="py-4 text-gray-300">
            Submit the form below to get in touch with me.
          </p>
        </div>
        <input
          className=" bg-[#ccd6f6] p-2"
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          type="email"
          name="name"
          placeholder="Email"
          className="my-4 p-2 bg-[#ccd6f6]"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#64ffda] hover:border-[#64ffda] hover:text-black hover:rounded hover:font-bold py-3 px-4 my-4 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;

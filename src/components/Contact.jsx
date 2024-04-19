import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-[#0a192f] w-full md:h-screen flex justify-center items-center p-4"
    >
      <form action="" className="flex flex-col max-w-[600px] w-full">
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
        >
          {" "}
        </textarea>
      </form>
    </div>
  );
};

export default Contact;

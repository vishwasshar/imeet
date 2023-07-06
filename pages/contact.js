import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";

const Contact = (props) => {
  const [message, setMessage] = useState("");
  const validate = object({
    name: string().required("Please enter name"),
    phone: string().min(10).max(10).required("Please enter number"),
    email: string()
      .email("Enter a valid E-mail address")
      .required("Please enter Email"),
    message: string()
      .max(254, "Character Limit:254")
      .required("Please enter Message"),
  });
  return (
    <div className="py-20 flex justify-center items-center ">
      <div className="bg-[#ffffffaa] px-20 py-8 shadow-[2px_2px_20px_5px_#4A86FF55] rounded-xl">
        <Formik
          initialValues={{ name: "", phone: "", email: "", message: "" }}
          validationSchema={validate}
          onSubmit={props.submitHandler}
        >
          {(formik) => (
            <Form className="flex flex-col items-center justify-between">
              <h2 className="text-3xl py-2">Contact Us</h2>
              <div className="my-2">
                <label
                  htmlFor="name"
                  className=" block text-sm text-gray-700 font-semibold py-2"
                >
                  Name
                </label>
                <Field
                  name="name"
                  className="border border-black rounded-md w-[300px] p-3 hover:bg-gray-100 hover:border-2 cursor-pointer"
                />
                <ErrorMessage
                  className="text-red-600"
                  component="div"
                  name="name"
                />
              </div>
              <div className="my-2">
                <label
                  htmlFor="phone"
                  className=" block text-sm text-gray-700 font-semibold py-2"
                >
                  Phone
                </label>
                <Field
                  name="phone"
                  className="border border-black rounded-md w-[300px] p-3 hover:bg-gray-100 hover:border-2 cursor-pointer"
                />
                <ErrorMessage
                  className="text-red-600"
                  component="div"
                  name="phone"
                />
              </div>
              <div className="my-2">
                <label
                  htmlFor="email"
                  className=" block text-sm text-gray-700 font-semibold py-2"
                >
                  Email
                </label>
                <Field
                  name="email"
                  className="border border-black rounded-md w-[300px] p-3 hover:bg-gray-100 hover:border-2 cursor-pointer"
                />
                <ErrorMessage
                  className="text-red-600"
                  component="div"
                  name="email"
                />
              </div>
              <div className="my-2">
                <label
                  htmlFor="message"
                  className=" block text-sm text-gray-700 font-semibold py-2"
                >
                  Message
                </label>
                <Field
                  name="message"
                  className="border border-black rounded-md w-[300px] p-3 hover:bg-gray-100 hover:border-2 cursor-pointer"
                  component="textarea"
                />
                <ErrorMessage
                  className="text-red-600"
                  component="div"
                  name="message"
                />
              </div>
              {props.children}
              <button
                type="submit"
                className=" border rounded-full bg-blue-600 text-white font-semibold py-3 px-5 my-2"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Contact;

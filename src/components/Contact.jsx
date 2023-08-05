import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaStackOverflow,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  let iconStyles = { color: "#7562e0", fontSize: "2rem" };
  return (
    <div className="px-7 md:px-10 my-10" id="contact">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <h1 className="text-3xl mt-16 text-primary font-semibold">
            Connect with me:
          </h1>
          <p className="text-white my-2 md:w-2/3 leading-[2]">
            Satisfied with me? Please contact me
          </p>

          <div className="flex gap-4 hover:text-primary">
            <Link to="mailto:lolalabi60@gmail.com" target="_blank">
              <MdEmail style={iconStyles} className="hover:bg-gray-400" />
            </Link>
            <Link to="#">
              <FaFacebook style={iconStyles} className="hover:bg-gray-400" />
            </Link>

            <Link to="#">
              <FaInstagram style={iconStyles} className="hover:bg-gray-400" />
            </Link>

            <Link to="#">
              <FaTwitter style={iconStyles} className="hover:bg-gray-400" />
            </Link>

            <Link to="https://github.com/Lolalabi" target="_blank">
              <FaGithub style={iconStyles} className="hover:bg-gray-400" />
            </Link>

            <Link
              to="https://stackoverflow.com/users/21899225/olabisi-lola-afolabi"
              target="_blank"
            >
              <FaStackOverflow
                style={iconStyles}
                className="hover:bg-gray-400"
              />
            </Link>
            <Link
              to="https://www.linkedin.com/in/olabisi-afolabi-720510158/"
              target="_blank"
            >
              <FaLinkedin style={iconStyles} className="hover:bg-gray-400" />
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <p className="mt-16 text-white text-2xl mb-6">
            Contact me let's make magic together
          </p>
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("Required"),
              email: Yup.string()
                .email("Invalid  email address")
                .required("Required"),
              message: Yup.string()
                .max(25, "Must be 25 characters or more")
                .required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form>
              <Field
                name="name"
                type="text"
                placeholder="Name:"
                className="bg-[#F5F5F5] focus:outline-none bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded"
              />
              <ErrorMessage name="name">
                {(msg) => <p style={{ color: "red" }}>{msg}</p>}
              </ErrorMessage>

              <Field
                name="email"
                type="email"
                placeholder="Email:"
                className="bg-[#F5F5F5] focus:outline-none bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded mt-3"
              />
              <ErrorMessage name="email">
                {(msg) => <p style={{ color: "red" }}>{msg}</p>}
              </ErrorMessage>

              <Field
                name="message"
                as="textarea"
                cols="54"
                rows="4"
                placeholder="Message:"
                className="form-textarea focus:outline-none bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded mt-3"
              />
              <ErrorMessage name="message">
                {(msg) => <p style={{ color: "red" }}>{msg}</p>}
              </ErrorMessage>
              <button
                type="submit"
                className="btn transition-all duration-500 bg-primary py-2 px-12 rounded text-white hover:bg-white hover:text-primary block mt-3"
              >
                Send
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default Contact;

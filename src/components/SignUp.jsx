import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addUserReducer } from "../redux/userReducer";
import {useNavigate} from "react-router-dom"

const SignUp = () => {
  const userName = useRef(null);
  const phone = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const company = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handler = (e) => {
    e.preventDefault();
  
    const usernameValue = userName?.current?.value.trim();
    const phoneValue = phone?.current?.value.trim();
    const emailValue = email?.current?.value.trim();
    const passwordValue = password?.current?.value.trim();
    const companyValue = company?.current?.value.trim();
  
    if (
      usernameValue === "" ||
      phoneValue === "" ||
      emailValue === "" ||
      passwordValue === "" ||
      companyValue === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }
  
    // Dispatch the data to Redux
    dispatch(
      addUserReducer({
        username: usernameValue,
        email: emailValue,
        phone: phoneValue,
        password: passwordValue,
        company: companyValue,
      })
    );
  
    userName.current.value = "";
    phone.current.value = "";
    email.current.value = "";
    password.current.value = "";
    company.current.value = "";
    navigate("/profile");
  };
  
  return (
    <div className="flex justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white w-full max-w-sm rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Create your <br /> PopX account
        </h1>

        <form autoComplete="off">
          {/* Full Name */}
          <div className="relative mb-7">
            <label
              htmlFor="fullName"
              className="absolute left-6 -top-2 text-sm text-[#6c25ff] bg-white px-3"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              autoComplete="off"
              placeholder="Enter your full name"
              ref={userName}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-purple-600"
            />
          </div>

          {/* Phone Number */}
          <div className="relative mb-7">
            <label
              htmlFor="phoneNumber"
              className="absolute left-6 -top-2 text-sm text-[#6c25ff] bg-white px-3"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="phoneNumber"
              type="text"
              autoComplete="off"
              placeholder="Enter your phone number"
              ref={phone}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-purple-600"
            />
          </div>

          {/* Email Address */}
          <div className="relative mb-7">
            <label
              htmlFor="email"
              className="absolute left-6 -top-2 text-sm text-[#6c25ff] bg-white px-3"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              autoComplete="off"
              ref={email}
              placeholder="Enter your email address"
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-purple-600"
            />
          </div>

          {/* Password */}
          <div className="relative mb-7">
            <label
              htmlFor="password"
              className="absolute left-6 -top-2 text-sm text-[#6c25ff] bg-white px-3"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <input
              id="password"
              type="password"
              autoComplete="new-password"
              placeholder="Enter your password"
              ref={password}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-purple-600"
            />
          </div>

          {/* Company Name */}
          <div className="relative mb-7">
            <label
              htmlFor="companyName"
              className="absolute left-6 -top-2 text-sm text-[#6c25ff] bg-white px-3"
            >
              Company Name
            </label>
            <input
              id="companyName"
              type="text"
              autoComplete="off"
              placeholder="Marry Doe"
              ref={company}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-purple-600"
            />
          </div>

          {/* Are you an Agency? */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Are you an Agency? <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-6">
              <label className="inline-flex items-center text-sm text-gray-700">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  required
                  className="form-radio text-purple-600 mr-2"
                />
                Yes
              </label>
              <label className="inline-flex items-center text-sm text-gray-700">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  required
                  className="form-radio text-purple-600 mr-2"
                />
                No
              </label>
            </div>
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            onClick={handler}
            className="w-full bg-purple-600 text-white py-2 rounded-md text-sm font-medium hover:bg-purple-700 transition-colors"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

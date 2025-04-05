import React from "react";
import { useSelector } from "react-redux";
import { FaCamera } from "react-icons/fa";

const UserProfile = () => {
  const userDetails = useSelector((state) => state.user);
  console.log(userDetails?.user?.username);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-4">
      <div className="w-full max-w-sm bg-white shadow p-6">
        <h1 className="text-xl font-semibold mb-2">Account Settings</h1>
        <hr className="border-dashed border-gray-300 mb-4" />

        <div className="flex items-center mb-4">
          <div className="relative w-16 h-16">
            <img
              src="https://previews.123rf.com/images/sheftsoff/sheftsoff1907/sheftsoff190700785/127795430-close-up-business-woman-face-portrait-isolated-on-white-background-smiling-female-model-office-suit.jpg"
              alt="User Avatar"
              className="w-16 h-16 rounded-full border"
            />
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#6C25FF] rounded-full flex items-center justify-center cursor-pointer">
              <FaCamera className="text-white text-xs" />
            </div>
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-medium text-gray-800">
              {userDetails?.user?.username}
            </h2>
            <h3 className="text-sm font-normal text-gray-800">
              {userDetails?.user?.email}
            </h3>
          </div>
        </div>

        <p className="text-gray-700 text-sm mb-4 font-medium">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
        <hr className="border-dashed border-gray-300 mb-4" />
      </div>
    </div>
  );
};

export default UserProfile;

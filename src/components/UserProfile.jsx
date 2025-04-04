import { useSelector } from "react-redux";
import { Camera } from "lucide-react";

const UserProfile = () => {
  const userDetails = useSelector((state) => state.user);
  console.log(userDetails?.user?.username)

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center p-4">
      <div className="w-full max-w-sm bg-white shadow p-6">
        <h1 className="text-xl font-semibold mb-2">Account Settings</h1>
        <hr className="border-dashed border-gray-300 mb-4" />

        <div className="flex items-center mb-4">
          <div className="relative">
            <img
              src="https://previews.123rf.com/images/sheftsoff/sheftsoff1907/sheftsoff190700785/127795430-close-up-business-woman-face-portrait-isolated-on-white-background-smiling-female-model-office-suit.jpg"
              alt="User Avatar"
              className="w-16 h-16 rounded-full"
            />
            <div className="absolute bottom-1 left-10">
            <div className="absolute bottom-1 left-10">
              <Camera className="w-5 h-5 text-gray-600 bg-white p-0.5 rounded-full" />
            </div>
            </div>
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-medium text-gray-800">{userDetails?.user?.username}</h2>
            <h3 className=" text-sm font-normal text-gray-800">
              {userDetails?.user?.email}
            </h3>
            <p className="text-sm text-gray-600"></p>
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

import { Facebook, Linkedin, Github } from "lucide-react";
import Lloyd from '../images/LLOYD.jpg'; // Update with the actual image path

const Profile = ({Name, Image, Title}) => {
  return (
    <div className="text-center">
      <img
        src={Image}
        alt="Team member"
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover bg-blue-50"
      />
      <h3 className="text-xl font-semibold">{Name}</h3>
      <p className="text-gray-600 mb-4">{Title}</p>
      <div className="flex justify-center space-x-3">
        <a href="#" className="text-gray-400 hover:text-gray-600">
          <span className="sr-only">Facebook</span>
          <Facebook />
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-600">
          <span className="sr-only">LinkedIn</span>
          <Linkedin />
        </a>
        <a href="#" className="text-gray-400 hover:text-gray-600">
          <span className="sr-only">GitHub</span>
          <Github />
        </a>
      </div>
    </div>
  );
};

export default Profile;

import welcomeBackground from "../Assets/welcome-background.jpg";
import welcomeCenter from "../Assets/welcome-center.jpg";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className="relative h-screen">
          <img
            src={welcomeBackground}
            alt="background"
            className="absolute h-full bg-cover  bg-no-repeat bg-center -z-10"
          />
          <img
            src={welcomeCenter}
            alt="centered pic"
            className="absolute bottom-52 -z-10"
          />
        </div>
        <div className="flex absolute flex-col  top-48 left-12">
          <h1 className="text-md w-1/2 tracking-in-contract-bck  text-white">
            Believe Yourself
          </h1>
          <p className="text-white hr-lines tracking-in-contract-bck text-sm">
            Train like a pro
          </p>
        </div>

        <button
          onClick={() => navigate(`/home/`)}
          className="absolute bottom-16 w-72  pt-6 pb-6 right-0 text-lg rounded-l-lg  text-black bg-white "
        >
          Start Training
        </button>
      </div>
    </div>
  );
};

export default Welcome;

import Nav from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [classesData, setClassesData] = useState();
  const [classData, setClassdata] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    const getClasses = async () => {
      const response = await axios.get("http://localhost:4000/api/v1/classes");
      setClassesData(response.data);
      setLoading(false);
    };
    getClasses();
  }, []);

  useEffect(() => {
    setLoading(true);
    const getClass = async () => {
      const response = await axios.get(
        "http://localhost:4000/api/v1/classes/4"
      );
      setClassdata(response.data);
      setLoading(false);
    };

    getClass();
  }, []);

  if (loading) {
    return (
      <div
        className="absolute  w-20 h-20 rounded-full animate-spin
        border-y border-solid   top-48 left-40 border-black border-t-transparent"
      ></div>
    );
  }

  return (
    <article>
      <Nav />
      <section className="flex flex-col ml-5 mr-5">
        <section className="relative">
          <img
            className="rounded-xl object-cover h-96 mt-10 "
            src={classData && classData.asset.url}
            alt="class"
          />
          <p className=" absolute bottom-10 text-white z-10 text-lg w-48 ml-5">
            {classData && classData.className}
          </p>
        </section>
        <p className="text-base mb-10 mt-10">Classes for you</p>
        <section className="flex  overflow-x-auto flex-row-reverse gap-4 ">
          {classesData &&
            classesData.map((items) => (
              <div className="flex flex-col">
                <img src={items.asset.url} className="rounded-xl h-20" alt="" />
                <p className="text-sm w-100">{items.className}</p>
              </div>
            ))}
        </section>
      </section>
    </article>
  );
};

export default Home;

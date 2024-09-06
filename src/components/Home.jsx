import React, { useEffect, useState } from "react";
import FacebookLoginButton from "./FacebookLoginButton";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [posts,setPosts]=useState(null)
  const [loading,setLoading]=useState(false)
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true)
    const fetchUserData = async () => {
      const accessToken = localStorage.getItem("accesstoken");

      if (!accessToken) {
        setError("No access token found.");
        setUserData(null);
        return;
      }
      try {
        // Fetch user information from Facebook Graph API
        const response = await fetch(
          `https://graph.facebook.com/me?fields=id,name,picture,email,birthday,gender,posts&access_token=${accessToken}`
        );
        const data = await response.json();
        if (data.error && data.error.code === 190) {
          setError("Access token expired. Please log in again.");
          localStorage.removeItem("accesstoken");
        } else {
          setError(null);
          setUserData(data);
          setPosts(data.posts.data) 
          setLoading(false)
        }
      } catch (err) {
        setError("Failed to fetch user data.");
        console.error("Error fetching user data:", err);
      }
    };
    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accesstoken");
    setUserData(null);
    navigate("/");
  };

  return (
    <div className=" bg-zinc-300 p-4 m-0 flex  justify-center items-center h-screen">
      <div className=" border-2 border-zinc-800 flex items-center justify-between  gap-4 p-4 rounded-xl">
        {error && <p className="text-red-500">{error}</p>}
        {
          loading ? 
            <div>
              Loading....
              </div>
              
       :
       <>
        <div className=" p-3 rounded-xl bg-zinc-500">
          {userData ? (
            <>
              <div
                className="flex justify-end  text-lg font-semibold "
                onClick={() => {
                  handleLogout();
                }}
              >
                <p className="bg-red-400 text-white p-2 rounded-xl cursor-pointer">
                  Logout
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src={userData.picture.data.url}
                  alt={userData.name}
                  className=" p-1  h-32 rounded-full border-4 border-green-400"
                />
              </div>
              <div className="text-xl font-medium text-zinc-800 space-y-3">
                <p className="text-center">Welcome ,{userData.name}</p>
                <p>UserId :{userData.id}</p>
                <p>EmailId :{userData.email}</p>
                <p>DOB :{userData.birthday}</p>
                <p>Gender :{userData.gender}</p>
              </div>
            </>
          ) : null}
        </div>
        <div className="bg-zinc-500 rounded-xl h-[100%] p-3 flex flex-col  justify-between ">
          <p>
            POSTS:
          </p>
          {posts && posts.length > 0 ? (
            posts.map((post, index) => (
              <div
                key={index}
                className="bg-pink-100 rounded-xl flex flex-col p-3 mb-2"
              >
                <p>{post.id}</p>
                <p>{post.created_time}</p>
              </div>
            ))
          ) : (
            <p className="text-black font-medium text-center">
              No posts available.
            </p>
          )}
        </div>{" "}
       </>
           
          }
      </div>
    </div>
  );
};

export default Home;

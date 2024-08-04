import axios from "axios";
import { useEffect, useState } from "react";
import { IUser } from "../../types";

const Home = () => {
  const [user, setUser] = useState<IUser[]>([]);
  
  const getUsers = async () => {
    let res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    let { data } = res;
    setUser(data);
  };
  useEffect(() => {
    getUsers();
  }, []);
 
  return (
    <div>
      <div className="container">
        <div className="home">
          {user.map((el) => (
            <div className="" key={el.id}>
              <h1>{el.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

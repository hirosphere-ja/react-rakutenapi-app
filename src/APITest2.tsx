import axios from "axios";
import { useEffect, useState } from "react";

function APITest2() {
  // 型定義
  type User = {
    id: number;
    name: string;
    email: string;
    company: Company;
  };

  type Company = {
    name: string;
  };

  async function getUsers() {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`,
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      return response.data;
    } catch (e) {
      if (axios.isAxiosError(e) && e.response && e.response.status === 404) {
        console.log("400 Error!!");
        console.log(e.message); //Axiosの例外オブジェクトとして扱える
      }
    }
  }

  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    (async function () {
      const res = await getUsers();
      setUsers(res);
    })();
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {users?.map((user: User) => (
        <div
          className="border border-gray-400 rounded-2xl p-2 m-2 w-80"
          key={user.id}
        >
          <h2 className="text-3xl font-bold">{user.name}</h2>
          <p className="m-0 text-gray-400">{user.email}</p>
          <p className="m-0 text-gray-400">{user.company.name}</p>
        </div>
      ))}
    </div>
  );
}

export default APITest2;

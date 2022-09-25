import { useEffect, useState } from "react";

function APITest() {
	// 型定義
  type User = {
    id: number;
    name: string;
    email: string;
    company: Company;
	};

	type Company = {
		name: string
	};

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {users.map((user: User) => (
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

export default APITest;

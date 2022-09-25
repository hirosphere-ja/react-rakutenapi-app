import axios from "axios";
import { useEffect, useState } from "react";

function APITest1() {
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

  const getUsers = async () => {
    const response = await axios
      .get(`http://jsonplaceholder.typicode.com/users`) // 存在しないリソースを参照する（404エラー発生）
      .catch((error) => {
        // レスポンスありのエラーハンドリング（実際には必要に応じた例外処理を実装する）
        if (
          axios.isAxiosError(error) &&
          error.response &&
          error.response.status === 404
        ) {
          console.log("404 Error!!");
          console.log(error.message); //Axiosの例外オブジェクトとして扱える
        }
        return error.response;
      });
    return response.data;
  };

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

export default APITest1;

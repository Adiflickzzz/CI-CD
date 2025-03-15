import Image from "next/image";
import { Client } from "@repo/db/client";

export default async function Home() {
  const user = await Client.user.findMany()
  return (
    <div className="flex flex-col">
      {Promise.all(user.map((user)=>{
        return (
          <div key={user.id} className="mt-2">
            <h1>User {user.id}</h1>
            <p>Username = {user.username}</p>
            <p>Password = {user.password}</p>
          </div> 
        )
      }))}
    </div>
  );
}

import axios from "axios"
import { useEffect } from "react";
import Button from "../components/ui/Button";

const profile = {
  login: "логин",
  points: "3",
  achievements: [{ "id": 0, "name": "имя", "points": 0, "description": "За что и почему" }]
}


const ProfilePage = () => {

  let token = ""
  const auth = async () => {
    const res = await axios.get('https://221ad6cc-809a-411f-b13e-59c7220e3e75.tunnel4.com/api/login?login=логин&password=пароль', {
      headers: {
        "Content-Type": 'application/json'
      }
    });
    token = res.data["ok"]["token"]
    console.log(token);
  }

  const fetchProfile = async () => {

    console.log("Tok: " + token);
    const res = await axios.get('https://221ad6cc-809a-411f-b13e-59c7220e3e75.tunnel4.com/api/profile', {
      headers: {
        "Content-Type": 'application/json',
        "JWT": token
      }
    });
    console.log(res);
  }

  useEffect(() => {
    auth();
  }, [])

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center gap-4'>
      <h3 className='font-bold text-4xl text-dark'>Profile</h3>
      <div className="">
        <h4>{profile.login}</h4>
        <span>Number of points: {profile.points}</span>
      </div>
      <Button onclick={fetchProfile}>Click</Button>
    </div>
  )
}

export default ProfilePage
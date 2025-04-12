import axios from "axios"
import { useEffect, useState } from "react";
import Button from "../components/ui/Button";

const profile = {
  login: "логин",
  points: "3",
  achievements: [{ "id": 0, "name": "имя", "points": 0, "description": "За что и почему" }]
}


const ProfilePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const [token, setToken] = useState('');

  const auth = async () => {
    const res = await axios.get('http://meowmur.ru/api/login?login=логин&password=пароль', {
      headers: {
        "Content-Type": 'application/json'
      }
    });
    setToken(res.data["ok"]["token"])
    console.log(token);
  }

  const fetchProfile = async () => {

    console.log("Tok: " + token);
    const res = await axios.get('http://meowmur.ru/api/profile', {
      headers: {
        "Content-Type": 'application/json',
        "Authorization": "Bearer " + token
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
import { useEffect, useState } from "react";
import { useStore } from "../store/useStore";
import { useNavigate } from "react-router-dom";
import { profileType } from "../store/types";
import Button from "../components/ui/Button";


const ProfilePage = () => {
  const { isAuth, getProfile, logout } = useStore();
  const navigate = useNavigate();
  const [profileInfo, setProfileInfo] = useState<profileType | null>(null);

  const fetchProfile = async () => {
    if (isAuth) {
      const res = await getProfile();
      setProfileInfo(res);
    }
  }

  const handleLogout = () => {
    logout();
    location.reload();
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, [])

  useEffect(() => {
    fetchProfile();
  }, [])

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center gap-4'>
      <h3 className='font-bold text-4xl text-dark'>Profile</h3>
      <div className="">
        <h4>{profileInfo?.login}</h4>
        <span>Number of points: {profileInfo?.points}</span>
      </div>

      <Button onclick={handleLogout}>Logout</Button>
    </div>
  )
}

export default ProfilePage
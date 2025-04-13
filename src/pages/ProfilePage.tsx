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
    <div className='w-full min-h-screen flex flex-col items-center justify-center gap-8 text-dark px-6 py-40 lg:px-14'>
      <div className="flex items-center justify-between gap-8 w-full">
        <h3 className='font-bold text-6xl'>Profile</h3>
        <Button onclick={handleLogout}>Logout</Button>
      </div>
      <div className="flex items-center flex-col md:flex-row gap-6 w-full ">
        <div className="w-full flex justify-between items-center bg-blue50 p-5 md:p-10 rounded-3xl md:rounded-4xl">
          <span className="text-2xl font-medium ">Login: </span>
          <span className="text-4xl font-medium text-light">{profileInfo?.login}</span>
        </div>
        <div className="w-full flex justify-between items-center bg-blue50 p-5 md:p-10 rounded-3xl md:rounded-4xl">
          <span className="text-2xl font-medium ">Number of points: </span>
          <span className="text-4xl font-medium text-light">{profileInfo?.points}</span>
        </div>
      </div>

      <h4 className='font-bold text-3xl mr-auto mt-10 md:mt-20'>Achievements</h4>

      {profileInfo?.achievements.length ? (
        <div className="grid grid-cols-2 grid-rows-2 gap-6">
          {profileInfo?.achievements.map(item => (
            <div key={item.id} className="w-full flex flex-col gap-6 bg-blue50 p-10 rounded-4xl">
              <div className="flex items-center justify-between">
                <h4 className="text-2xl font-semibold text-light">{item.name}</h4>
                <span className="bg-blue rounded-full text-light size-10 flex items-center justify-center">
                  {item.points}
                </span>
              </div>

              <p className="text-blue text-lg h-20 overflow-hidden">{item.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-2xl mr-auto text-dark">You don't have any achievements yet</p>
      )}
    </div>
  )
}

export default ProfilePage
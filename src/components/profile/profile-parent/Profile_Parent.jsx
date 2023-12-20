import Profile_Edit from "../profile-edit/Profile_Edit";
import Profile_Sidebar from "../profile-sidebar/Profile_Sidebar";

const Profile_Parent = () => {
  return (
    <>
      <div className="profile min-h-[100vh] relative">
        <div className="route">
          <div className="route flex gap-2 w-full justify-between absolute top-[4%] left-[3%]">
            <div className="flex gap-2">
              <button className="text-[#868686]">Home</button>
              <button className="text-[#868686]">/</button>
              <button>My Account</button>
            </div>
            <div className="name mr-12">
              <span className="text-red-400">
                Welcome! <span className="text-black">Faizan</span>
              </span>
            </div>
          </div>
        </div>
        <div className="sidebar-section absolute top-[13%] left-[4%]">
          <Profile_Sidebar />
        </div>
        <div className="right absolute left-[32%] top-[13%]">
          <Profile_Edit />
        </div>
      </div>
    </>
  );
};

export default Profile_Parent;

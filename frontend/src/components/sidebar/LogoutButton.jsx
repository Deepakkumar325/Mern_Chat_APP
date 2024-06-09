import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import { useAuthContext } from '../../context/AuthContext'
const LogoutButton = () => {
  const { loading, logout } = useLogout();
  const {authUser}=useAuthContext();

  return (
    <div className="mt-auto">
   
   <p style={{
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '10px',
      borderRadius: '10px',
      backgroundColor: '#f0d4f5',
      color: '#333',
      fontWeight: 'bold',
      textAlign: 'center',
      margin: '5px',
      fontSize: '1rem'
    }}> !!Welcome , {authUser.fullName}
    </p>
      {!loading ? (
         <BiLogOut
          className="w-8 h-8 text-dark  cursor-pointer"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  );
};
export default LogoutButton;

 
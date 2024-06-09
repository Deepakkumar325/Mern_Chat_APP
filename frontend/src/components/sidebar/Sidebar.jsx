import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
// import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className='bg-white border-dark p-4 flex flex-col'>
			<SearchInput />
			<div className='divider px-3'></div>
			<Conversations />
			<LogoutButton/>
		</div>
	);
};
export default Sidebar;

import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import './home.css'
const Home = () => {
  return (
   
    <div className="d-flex h-100 container2 rounded-lg overflow-hidden bg-green-300 bg-clip-padding backdrop-filter backdrop-blur-lg bg-">
  <Sidebar className="sidebar" />
  <MessageContainer className="message-container" />
</div>

  );
};
export default Home;

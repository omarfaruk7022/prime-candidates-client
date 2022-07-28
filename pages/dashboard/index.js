import Navber from "../../components/Navber";
import UserDashboard from "../../components/UserDashboard";

const Dashboard = () => {
    return (
        <div>
            <Navber>
                <UserDashboard></UserDashboard>
            </Navber>
        </div>
    );
};

export default Dashboard;
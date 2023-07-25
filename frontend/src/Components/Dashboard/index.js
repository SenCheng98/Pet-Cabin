import { useLocalStorage } from "../../util/useLocalStorage";

const Dashboard = () => {

    const [jwt,setJwt] = useLocalStorage("","jwt");
    return(
        <div>
            <h1>welcome to petcabin</h1>
            <div>JWT value is {jwt}</div>
        </div>
    );
};

export default Dashboard;
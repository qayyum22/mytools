import React from "react";



const Form = () => {

    // const [userData, setUserData] = useState(null);

    // useEffect(() => {
    //     const fetchUserData = async () => {
    //         try {
    //             const response = await axios.get("http://localhost:8000/");
    //             console.log(response);
    //             setUserData(response.data);
    //         }
    //         catch (error) {
    //             console.log("Error Fetching user data: ", error);
    //         }
    //     };
    //     fetchUserData();
    // }, []);


    return (
        <div>
            {/* {userData ? (
                <div>
                    <h2>User Details: </h2>
                    <p>ID: {userData.id}</p>
                    <p>Name: {userData.first_name} {userData.last_name}</p>
                    <p>Email: {userData.email}</p>
                    <img src={userData.avatar} alt="User Avatar" />
                </div>
            ) : (
                <p>Loading user data...</p>
            )} */}

            User Form
        </div>
    );
};

export default Form;
import React from "react";
import Spinner from "../views/layouts/Spinner";
import User from "../views/user/Dashboard"

const Home = (loading) => {

    // const renderDashboard = (user) => {
    //     if(user == null)
    //         return (<div>Invalid User</div>);

    //     if(user.role === "Student")
    //         return <Student />;
    //     else if(user.role === "Coach")
    //         return <Coach />;
    //     else if(user.role === "Admin")
    //         return <Admin />;
    //     else return (<div>Invalid Role</div>);
    // }

    return loading ? <Spinner /> : (
        <User />
    );
}

// Home.propTypes = {
//     auth: PropTypes.object.isRequired
// }

// const mapStateToProps = (state) => ({
//     auth: state.auth
// });

export default Home;
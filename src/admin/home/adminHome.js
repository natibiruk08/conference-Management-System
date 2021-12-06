import React from 'react';
import Layout from "./layout";
import { Link } from "react-router-dom";

const AdminConference = () => {

    const Actions = () => {
        return (
            <div className="card mb-5" style={{ border: '2px solid #666' }}>
                <h3 className="card-header" style={{ background: "#BEBEBE" }}> Manage Conferences </h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/manage-conferences" > Manage Conference </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/manage-speakers" > Manage Speaker </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/manage-topic" > Manage Topics </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/views" > Active Conference </Link>
                    </li>
                </ul>
            </div>
        )
    };



    return (
        <div className="border border-info" style={{ margin: 40 }}>
            <Layout titleheader="Dashboard" titleDescription="Admin Dashboard" className="container-fluid">
                <div className="container pt-5">
                    <div className="row">

                        <div className="col-4">
                            {Actions()}
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default AdminConference;

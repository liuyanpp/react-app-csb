import React from "react";
import { Route, Link, Redirect, useParams } from 'react-router-dom';

const Profile = () => {
    const { userId } = useParams();

    return (
        <>
            <h1>Hello from User Profile {userId}!</h1>
            <Link to={`/users/${userId}/photos`}>Photos</Link>
            <Link to={`/users/${userId}/about-me`}>About Me</Link>

            <Route path="/users/:userId/photos">
                <h2>Photos for {userId}</h2>
            </Route>
            <Route path="/users/:userId/about-me">
                <h2>About Me for {userId}</h2>
            </Route>
        </>
    );
}

export default Profile;

import React from "react";
import {Card, CardBody} from "reactstrap";

//Taking reference from https://api.github.com/users/RakshitGupta621

const UserCard = ({user}) => {
    return(
        <Card className = "text-center mt-3 mb-4">
            <img src = {user.avatar_url} className="img-thumbnail" alt=""/>
            <CardBody>
                <div className="text-primary">{user.name}</div>
                <div className="text-primary">{user.location}</div>
                <div className="text-primary">{user.bio}</div>
                <div className="text-primary">Followers: {user.followers}</div>
            </CardBody>
        </Card>
    )
}

export default UserCard;

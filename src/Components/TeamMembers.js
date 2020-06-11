import React from "react";

const TeamMembers = props => {
    return (
        <div className='Team-List'>
            {props.teamMembers.map(members => (
                <div className='member' key={members.id}>
                    <h2>{members.name}</h2>
                    <p>{members.email}</p>
                    <p>{members.role}</p>
                </div>
            ))}
        </div>
    );
};

export default TeamMembers;
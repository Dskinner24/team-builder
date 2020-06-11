import React, { useState } from "react";

const Forms = props => {
    const [ teamMember, setTeamMember ] = useState({
        name: '',
        email: '',
        role: '',
    });

    const handleChanges = e => {
        setTeamMember({...teamMember, [e.target.name]: e.target.value})

        console.log(teamMember);
    };

    const submitForm = e => {
        e.preventDefault();
        props.addNewMember(teamMember);
        setTeamMember({name: '', email: '', role: '' })
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Team Member's Name</label>
            <input id='name' type='text' name='name' onChange={handleChanges} placeHolder='Name' value={teamMember.name} />
            <label htmlFor='email'>Team Member's Email</label>
            <input id='email' type='text' name='email' onChange={handleChanges} placeHolder='Email' value={teamMember.email} />
            <label htmlFor='role'>Team Member's Role</label>
            <input id='role' type='text' name='role' onChange={handleChanges} placeHolder='Role' value={teamMember.role} />
            <button type="submit">Add Team Member</button>
        </form> 
    )
};

export default Forms;
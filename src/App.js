import React, { useState } from 'react';
import './App.css';
import Forms from './Components/Forms';
import TeamMembers from './Components/TeamMembers';


function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  const addNewMember = members => {
    const newMember = {
      id: Date.now(),
      name: members.name,
      email: members.email,
      role: members.role,
    };

    setTeamMembers([...teamMembers, newMember])
  }

  return (
    <div className="App">
      <h1>Team Members</h1>
      <Forms addNewMember={addNewMember} />
      <TeamMembers teamMembers={teamMembers} />
    </div>
  );
}

export default App;
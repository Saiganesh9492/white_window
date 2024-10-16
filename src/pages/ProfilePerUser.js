import React from 'react';
import { useParams } from 'react-router-dom';
import { PROFILE_DTL } from '../staticdata/profileDtlData';

const ProfilePerUser = () => {
  const { id } = useParams();
  const profile = PROFILE_DTL.find(p => p.id === parseInt(id));

  if (!profile) {
    return <div>Profile not found</div>
  }

  return (
    <div>
      <h1>{profile.name}</h1>
      <img src={profile.image} alt={profile.name} />
      <p>{profile.description}</p>
    </div>
  );
};

export default ProfilePerUser;

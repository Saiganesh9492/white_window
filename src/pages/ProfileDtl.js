import React from 'react';
import { PROFILE_DTL } from '../staticdata/profileDtlData';
import ProfileCard from '../components/ProfileCard';

const ProfileDtl = () => {
  return (
    <div>
      {
        PROFILE_DTL.map((profile) => ( 
          <ProfileCard key={profile.id} profile={profile} /> 
        ))
      }
    </div>
  );
};

export default ProfileDtl;

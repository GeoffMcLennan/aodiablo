import React from 'react';

import { amazonSkills } from '../../data';

export const Skill = () => {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/images/${amazonSkills[0].image}`} />
    </div>
  )

}
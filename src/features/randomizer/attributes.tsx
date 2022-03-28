import React from 'react';
import { useAppSelector } from '../../app/hooks';

export const Attributes = () => {
  const { attributes } = useAppSelector(state => state.randomizer);
  
  return (
    <div>
      <ul>
        <li>Strength: {attributes.strength}</li>
        <li>Dexterity: {attributes.dexterity}</li>
        <li>Vitality: {attributes.vitality}</li>
        <li>Energy: {attributes.energy}</li>
      </ul>
    </div>
  )
}
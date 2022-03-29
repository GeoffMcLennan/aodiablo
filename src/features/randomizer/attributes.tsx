import React from 'react';

import './randomizer.css';

import { useAppSelector } from '../../app/hooks';

export const Attributes = () => {
  const { attributes, animation } = useAppSelector(state => state.randomizer);
  let renderedAttributes;
  if (animation && animation.isAnimating) {
    renderedAttributes = animation.animationAttributes;
  } else {
    renderedAttributes = attributes;
  }
  
  return (
    <div className='attribute-list-container'>
      <div>
        <div>Strength: {renderedAttributes.strength}</div>
        <div>Dexterity: {renderedAttributes.dexterity}</div>
        <div>Vitality: {renderedAttributes.vitality}</div>
        <div>Energy: {renderedAttributes.energy}</div>
      </div>
    </div>
  )
}
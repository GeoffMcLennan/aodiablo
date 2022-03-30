import React from 'react';

import './randomizer.css';

import { useAppSelector } from '../../app/hooks';

export const Attributes = () => {
  const { attributes, animation } = useAppSelector(state => state.randomizer);
  let renderedAttributes;
  if (animation && animation.isAnimatingAttributes) {
    renderedAttributes = animation.animationAttributes;
  } else {
    renderedAttributes = attributes;
  }
  
  return (
    <div className='attribute-list-container'>
      <div className='attribute-list-inner-container'>
        <table>
          <tbody>
            <tr>
              <td className='label'>Strength</td>
              <td className='value'>{renderedAttributes.strength}</td>
            </tr>
            <tr>
              <td className='label'>Dexterity</td>
              <td className='value'>{renderedAttributes.dexterity}</td>
            </tr>
            <tr>
              <td className='label'>Vitality</td>
              <td className='value'>{renderedAttributes.vitality}</td>
            </tr>
            <tr>
              <td className='label'>Energy</td>
              <td className='value'>{renderedAttributes.energy}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
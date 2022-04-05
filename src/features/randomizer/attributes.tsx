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
        <table className='attribute-table'>
          <tbody>
            <tr className='attribute-table-row'>
              <td className='label text-container'>Strength</td>
              <td className='value text-container'>{renderedAttributes.strength}</td>
            </tr>
            <tr className='attribute-table-row'>
              <td className='label text-container'>Dexterity</td>
              <td className='value text-container'>{renderedAttributes.dexterity}</td>
            </tr>
            <tr className='attribute-table-row'>
              <td className='label text-container'>Vitality</td>
              <td className='value text-container'>{renderedAttributes.vitality}</td>
            </tr>
            <tr className='attribute-table-row'>
              <td className='label text-container'>Energy</td>
              <td className='value text-container'>{renderedAttributes.energy}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
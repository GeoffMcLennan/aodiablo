import { Skill } from ".";

export const sorceressSkills: Record<string, Skill> = {
  // Cold
  iceBolt: {
    name: 'Ice Bolt',
    requiredLevel: 1,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/sorceress/cold%20spells/Ice%20Bolt.jpg',    
  }, 
  frozenArmor: {
    name: 'Frozen Armor',
    requiredLevel: 1,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/sorceress/cold%20spells/Frozen%20Armor.jpg',    
  }, 
  frostNova: {
    name: 'Frost Nova',
    requiredLevel: 6,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/sorceress/cold%20spells/Frost%20Nova.jpg',    
  }, 
  iceBlast: {
    name: 'Ice Blast',
    requiredLevel: 6,
    requiredSkills: ['iceBolt'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/sorceress/cold%20spells/Ice%20Blast.jpg',    
  },
  shiverArmor: {
    name: 'Shiver Armor',
    requiredLevel: 12,
    requiredSkills: ['iceBlast', 'frozenArmor'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/sorceress/cold%20spells/Shiver%20Armor.jpg',    
  },
  glacialSpike: {
    name: 'Glacial Spike',
    requiredLevel: 18,
    requiredSkills: ['iceBlast'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/sorceress/cold%20spells/Glacial%20Spike.jpg',    
  },
  blizzard: {
    name: 'Blizzard',
    requiredLevel: 24,
    requiredSkills: ['frostNova', 'glacialSpike'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/sorceress/cold%20spells/Blizzard.jpg',    
  },
  chillingArmor: {
    name: 'Chilling Armor',
    requiredLevel: 24,
    requiredSkills: ['shiverArmor'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/sorceress/cold%20spells/Chilling%20Armor.jpg',    
  },
  frozenOrb: {
    name: 'Frozen Orb',
    requiredLevel: 30,
    requiredSkills: ['blizzard'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/sorceress/cold%20spells/Frozen%20Orb.jpg',    
  },
  coldMastery: {
    name: 'Cold Mastery',
    requiredLevel: 30,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/sorceress/cold%20spells/Cold%20Mastery.jpg',    
  },
  // Lightning
  chargedBolt: {
    name: 'Charged Bolt',
    requiredLevel: 1,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/sorceress/lightning%20spells/Charged%20Bolt.jpg',    
  },
  staticField: {
    name: 'Static Field',
    requiredLevel: 6,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/sorceress/lightning%20spells/Static%20Field.jpg',    
  },
  telekinesis: {
    name: 'Telekinesis',
    requiredLevel: 6,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/sorceress/lightning%20spells/Telekinesis.jpg',    
  },
  nova: {
    name: 'Nova',
    requiredLevel: 12,
    requiredSkills: ['staticField'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/sorceress/lightning%20spells/Nova.jpg',    
  },
  lightning: {
    name: 'Lightning',
    requiredLevel: 12,
    requiredSkills: ['chargedBolt'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/sorceress/lightning%20spells/Lightning.jpg',    
  },
  chainLightning: {
    name: 'Chaing Lightning',
    requiredLevel: 18,
    requiredSkills: ['lightning'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/sorceress/lightning%20spells/Chain%20Lightning.jpg',    
  },
  teleport: {
    name: 'Teleport',
    requiredLevel: 18,
    requiredSkills: ['telekinesis'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/sorceress/lightning%20spells/Teleport.jpg',    
  },
  thunderStorm: {
    name: 'Thunder Storm',
    requiredLevel: 24,
    requiredSkills: ['nova', 'chainLightning'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/sorceress/lightning%20spells/Thunder%20Storm.jpg',    
  },
  energyShield: {
    name: 'Energy Shield',
    requiredLevel: 24,
    requiredSkills: ['chainLightning', 'teleport'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/sorceress/lightning%20spells/Energy%20Shield.jpg',   
  },
  lightningMastery: {
    name: 'Lightning Mastery',
    requiredLevel: 30,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/sorceress/lightning%20spells/Lightning%20Mastery.jpg',  
  },
  // Fire
  fireBolt: {
    name: 'Fire Bolt',
    requiredLevel: 1,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/sorceress/fire%20spells/Fire%20Bolt.jpg',
  },
  warmth: {
    name: 'Warmth',
    requiredLevel: 1,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/sorceress/fire%20spells/Warmth.jpg',  
  },
  inferno: {
    name: 'Inferno',
    requiredLevel: 6,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/sorceress/fire%20spells/Inferno.jpg',  
  },
  blaze: {
    name: 'Blaze',
    requiredLevel: 12,
    requiredSkills: ['inferno'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/sorceress/fire%20spells/Blaze.jpg',  
  },
  fireBall: {
    name: 'Fire Ball',
    requiredLevel: 12,
    requiredSkills: ['fireBolt'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/sorceress/fire%20spells/Fire%20Ball.jpg',  
  },
  fireWall: {
    name: 'Fire Wall',
    requiredLevel: 18,
    requiredSkills: ['blaze'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/sorceress/fire%20spells/Fire%20Wall.jpg',  
  },
  enchant: {
    name: 'Enchant',
    requiredLevel: 18,
    requiredSkills: ['fireBall', 'warmth'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/sorceress/fire%20spells/Enchant.jpg',  
  },
  meteor: {
    name: 'Meteor',
    requiredLevel: 24,
    requiredSkills: ['fireWall', 'fireBall'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/sorceress/fire%20spells/Meteor.jpg',  
  },
  fireMastery: {
    name: 'Fire Mastery',
    requiredLevel: 30,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/sorceress/fire%20spells/Fire%20Mastery.jpg',  
  },
  hydra: {
    name: 'Hydra',
    requiredLevel: 30,
    requiredSkills: ['enchant'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/sorceress/fire%20spells/Hydra.jpg',  
  },
}
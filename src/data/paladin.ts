import { Skill } from ".";

export const paladinSkills: Record<string, Skill> = {
  // Defensive Auras
  prayer: {
    name: 'Prayer',
    requiredLevel: 1,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/paladin/defensive%20auras/Prayer.jpg',    
  }, 
  resistFire: {
    name: 'Resist Fire',
    requiredLevel: 1,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/paladin/defensive%20auras/Resist%20Fire.jpg',    
  }, 
  defiance: {
    name: 'Defiance',
    requiredLevel: 6,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/paladin/defensive%20auras/Defiance.jpg',    
  }, 
  resistCold: {
    name: 'Resist Cold',
    requiredLevel: 6,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/paladin/defensive%20auras/Resist%20Cold.jpg',    
  },
  cleansing: {
    name: 'Cleansing',
    requiredLevel: 12,
    requiredSkills: ['prayer'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/paladin/defensive%20auras/Cleansing.jpg',    
  },
  resistLightning: {
    name: 'Resist Lightning',
    requiredLevel: 12,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/paladin/defensive%20auras/Resist%20Lightning.jpg',    
  },
  vigor: {
    name: 'Vigor',
    requiredLevel: 18,
    requiredSkills: ['cleansing', 'defiance'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/paladin/defensive%20auras/Vigor.jpg',    
  },
  meditation: {
    name: 'Meditation',
    requiredLevel: 24,
    requiredSkills: ['cleansing'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/paladin/defensive%20auras/Meditation.jpg',    
  },
  redemption: {
    name: 'Redemption',
    requiredLevel: 30,
    requiredSkills: ['vigor'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/paladin/defensive%20auras/Redemption.jpg',    
  },
  salvation: {
    name: 'Salvation',
    requiredLevel: 30,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/paladin/defensive%20auras/Salvation.jpg',    
  },
  // Offensive Auras
  might: {
    name: 'Might',
    requiredLevel: 1,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/paladin/offensive%20auras/Might.jpg',    
  },
  holyFire: {
    name: 'Holy Fire',
    requiredLevel: 6,
    requiredSkills: ['might'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/paladin/offensive%20auras/Holy%20Fire.jpg',    
  },
  thorns: {
    name: 'Thorns',
    requiredLevel: 6,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/paladin/offensive%20auras/Thorns.jpg',    
  },
  blessedAim: {
    name: 'Blessed Aim',
    requiredLevel: 12,
    requiredSkills: ['might'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/paladin/offensive%20auras/Blessed%20Aim.jpg',    
  },
  concentration: {
    name: 'Concentration',
    requiredLevel: 18,
    requiredSkills: ['blessedAim'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/paladin/offensive%20auras/Concentration.jpg',    
  },
  holyFreeze: {
    name: 'Holy Freeze',
    requiredLevel: 18,
    requiredSkills: ['holyFire'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/paladin/offensive%20auras/Holy%20Freeze.jpg',    
  },
  holyShock: {
    name: 'Holy Shock',
    requiredLevel: 24,
    requiredSkills: ['holyFreeze'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/paladin/offensive%20auras/Holy%20Shock.jpg',    
  },
  sanctuary: {
    name: 'Sanctuary',
    requiredLevel: 24,
    requiredSkills: ['holyFreeze', 'thorns'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/paladin/offensive%20auras/Sanctuary.jpg',    
  },
  fanaticism: {
    name: 'Fanaticism',
    requiredLevel: 30,
    requiredSkills: ['concentration'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/paladin/offensive%20auras/Fanaticism.jpg',   
  },
  conviction: {
    name: 'Conviction',
    requiredLevel: 30,
    requiredSkills: ['sanctuary'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/paladin/offensive%20auras/Conviction.jpg',  
  },
  // Combat Skills
  sacrifice: {
    name: 'Sacrifice',
    requiredLevel: 1,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/paladin/combat%20skills/Sacrifice.jpg',
  },
  smite: {
    name: 'Smite',
    requiredLevel: 1,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/paladin/combat%20skills/Smite.jpg',  
  },
  holyBolt: {
    name: 'Holy Bolt',
    requiredLevel: 6,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/paladin/combat%20skills/Holy%20Bolt.jpg',  
  },
  zeal: {
    name: 'Zeal',
    requiredLevel: 12,
    requiredSkills: ['sacrifice'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/paladin/combat%20skills/Zeal.jpg',  
  },
  charge: {
    name: 'Charge',
    requiredLevel: 12,
    requiredSkills: ['smite'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/paladin/combat%20skills/Charge.jpg',  
  },
  vengeance: {
    name: 'Vengeance',
    requiredLevel: 18,
    requiredSkills: ['zeal'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/paladin/combat%20skills/Vengeance.jpg',  
  },
  blessedHammer: {
    name: 'Blessed Hammer',
    requiredLevel: 18,
    requiredSkills: ['holyBolt'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/paladin/combat%20skills/Blessed%20Hammer.jpg',  
  },
  conversion: {
    name: 'Conversion',
    requiredLevel: 24,
    requiredSkills: ['vengeance'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/paladin/combat%20skills/Conversion.jpg',  
  },
  holyShield: {
    name: 'Holy Shield',
    requiredLevel: 24,
    requiredSkills: ['blessedHammer', 'charge'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/paladin/combat%20skills/Holy%20Shield.jpg',  
  },
  fistOfTheHeavens: {
    name: 'Fist of the Heavens',
    requiredLevel: 30,
    requiredSkills: ['conversion', 'blessedHammer'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/paladin/combat%20skills/Fist%20of%20the%20Heavens.jpg',  
  },
}
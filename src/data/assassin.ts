import { Skill } from ".";

export const assassinSkills: Record<string, Skill> = {
  // Martial Arts
  tigerStrike: {
    name: 'Tiger Strike',
    requiredLevel: 1,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/assassin/martial%20arts/Tiger%20Strike.jpg',    
  }, 
  dragonTalon: {
    name: 'Dragon Talon',
    requiredLevel: 1,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/assassin/martial%20arts/Dragon%20Talon.jpg',    
  }, 
  fistsOfFire: {
    name: 'Fists of Fire',
    requiredLevel: 6,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/assassin/martial%20arts/Fists%20of%20Fire.jpg',    
  }, 
  dragonClaw: {
    name: 'Dragon Claw',
    requiredLevel: 6,
    requiredSkills: ['dragonTalon'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/assassin/martial%20arts/Dragon%20Claw.jpg',    
  },
  cobraStrike: {
    name: 'Cobra Strike',
    requiredLevel: 12,
    requiredSkills: ['tigerStrike'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/assassin/martial%20arts/Cobra%20Strike.jpg',    
  },
  clawsOfThunder: {
    name: 'Claws of Thunder',
    requiredLevel: 18,
    requiredSkills: ['fistsOfFire'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/assassin/martial%20arts/Claws%20of%20Thunder.jpg',    
  },
  dragonTail: {
    name: 'Dragon Tail',
    requiredLevel: 18,
    requiredSkills: ['dragonClaw'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/assassin/martial%20arts/Dragon%20Tail.jpg',    
  },
  bladesOfIce: {
    name: 'Blades of Ice',
    requiredLevel: 24,
    requiredSkills: ['clawsOfThunder'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/assassin/martial%20arts/Blades%20of%20Ice.jpg',    
  },
  dragonFlight: {
    name: 'Dragon Flight',
    requiredLevel: 24,
    requiredSkills: ['dragonTail'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/assassin/martial%20arts/Dragon%20Flight.jpg',    
  },
  phoenixStrike: {
    name: 'Phoenix Strike',
    requiredLevel: 30,
    requiredSkills: ['bladesOfIce', 'cobraStrike'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/assassin/martial%20arts/Phoenix%20Strike.jpg',    
  },
  // Shadow Disciplines
  clawMastery: {
    name: 'Claw Mastery',
    requiredLevel: 1,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/assassin/shadow%20disciplines/Claw%20Mastery.jpg',    
  },
  psychicHammer: {
    name: 'Psychic Hammer',
    requiredLevel: 1,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/assassin/shadow%20disciplines/Psychic%20Hammer.jpg',    
  },
  burstOfSpeed: {
    name: 'Burst of Speed',
    requiredLevel: 6,
    requiredSkills: ['clawMastery'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/assassin/shadow%20disciplines/Burst%20of%20Speed.jpg',    
  },
  weaponBlock: {
    name: 'Weapon Block',
    requiredLevel: 12,
    requiredSkills: ['clawMastery'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/assassin/shadow%20disciplines/Weapon%20Block.jpg',    
  },
  cloakOfShadows: {
    name: 'Cloak of Shadows',
    requiredLevel: 12,
    requiredSkills: ['psychicHammer'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/assassin/shadow%20disciplines/Cloak%20of%20Shadows.jpg',    
  },
  fade: {
    name: 'Fade',
    requiredLevel: 18,
    requiredSkills: ['burstOfSpeed'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/assassin/shadow%20disciplines/Fade.jpg',    
  },
  shadowWarrior: {
    name: 'Shadow Warrior',
    requiredLevel: 18,
    requiredSkills: ['weaponBlock', 'cloakOfShadows'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/assassin/shadow%20disciplines/Shadow%20Warrior.jpg',    
  },
  mindBlast: {
    name: 'Mind Blast',
    requiredLevel: 24,
    requiredSkills: ['cloakOfShadows'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/assassin/shadow%20disciplines/Cloak%20of%20Shadows.jpg',    
  },
  venom: {
    name: 'Venom',
    requiredLevel: 30,
    requiredSkills: ['fade'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/assassin/shadow%20disciplines/Venom.jpg',   
  },
  shadowMaster: {
    name: 'Shadow Master',
    requiredLevel: 30,
    requiredSkills: ['shadowWarrior'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/assassin/shadow%20disciplines/Shadow%20Master.jpg',  
  },
  // Traps
  fireBlast: {
    name: 'Fire Blast',
    requiredLevel: 1,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/assassin/traps/Fire%20Blast.jpg',
  },
  shockWeb: {
    name: 'Shock Web',
    requiredLevel: 6,
    requiredSkills: ['fireBlast'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/assassin/traps/Shock%20Web.jpg',  
  },
  bladeSentinel: {
    name: 'Blade Sentinel',
    requiredLevel: 6,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/assassin/traps/Blade%20Sentinel.jpg',  
  },
  chargedBoltSentry: {
    name: 'Charged Bolt Sentry',
    requiredLevel: 12,
    requiredSkills: ['shockWeb'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/assassin/traps/Charged%20Bolt%20Sentry.jpg',  
  },
  wakeOfFire: {
    name: 'Wake of Fire',
    requiredLevel: 12,
    requiredSkills: ['fireBlast'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/assassin/traps/Wake%20of%20Fire.jpg',  
  },
  bladeFury: {
    name: 'Blade Fury',
    requiredLevel: 18,
    requiredSkills: ['bladeSentinel', 'wakeOfFire'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/assassin/traps/Blade%20Fury.jpg',  
  },
  lightningSentry: {
    name: 'Lightning Sentry',
    requiredLevel: 24,
    requiredSkills: ['chargedBoltSentry'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/assassin/traps/Lightning%20Sentry.jpg',  
  },
  wakeOfInferno: {
    name: 'Wake of Inferno',
    requiredLevel: 24,
    requiredSkills: ['wakeOfFire'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/assassin/traps/Wake%20of%20Inferno.jpg',  
  },
  deathSentry: {
    name: 'Death Sentry',
    requiredLevel: 30,
    requiredSkills: ['lightningSentry'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/assassin/traps/Death%20Sentry.jpg',  
  },
  bladeShield: {
    name: 'Blade Shield',
    requiredLevel: 30,
    requiredSkills: ['bladeFury'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/assassin/traps/Blade%20Shield.jpg',  
  },
}
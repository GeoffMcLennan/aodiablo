import { Skill } from ".";

export const barbarianSkills: Record<string, Skill> = {
  // Warcries
  howl: {
    name: 'Howl',
    requiredLevel: 1,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/barbarian/warcries/Howl.jpg',    
  }, 
  findPotion: {
    name: 'Find Potion',
    requiredLevel: 1,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/barbarian/warcries/Find%20Potion.jpg',    
  }, 
  taunt: {
    name: 'Taunt',
    requiredLevel: 6,
    requiredSkills: ['howl'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/barbarian/warcries/Taunt.jpg',    
  }, 
  shout: {
    name: 'Shout',
    requiredLevel: 6,
    requiredSkills: ['howl'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/barbarian/warcries/Shout.jpg',    
  },
  findItem: {
    name: 'Find Item',
    requiredLevel: 12,
    requiredSkills: ['findPotion'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/barbarian/warcries/Find%20Item.jpg',    
  },
  battleCry: {
    name: 'Battle Cry',
    requiredLevel: 18,
    requiredSkills: ['taunt'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/barbarian/warcries/Battle%20Cry.jpg',    
  },
  battleOrders: {
    name: 'Battle Orders',
    requiredLevel: 24,
    requiredSkills: ['shout'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/barbarian/warcries/Battle%20Orders.jpg',    
  },
  grimWard: {
    name: 'Grim Ward',
    requiredLevel: 24,
    requiredSkills: ['findItem'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/barbarian/warcries/Grim%20Ward.jpg',    
  },
  warCry: {
    name: 'War Cry',
    requiredLevel: 30,
    requiredSkills: ['battleCry', 'battleOrders'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/barbarian/warcries/War%20Cry.jpg',    
  },
  battleCommand: {
    name: 'Battle Command',
    requiredLevel: 30,
    requiredSkills: ['battleOrders'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/barbarian/warcries/Battle%20Command.jpg',    
  },
  // Combat Masteries
  swordMastery: {
    name: 'Sword Mastery',
    requiredLevel: 1,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/barbarian/combat%20masteries/Sword%20Mastery.jpg',    
  },
  axeMaster: {
    name: 'Axe Mastery',
    requiredLevel: 1,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/barbarian/combat%20masteries/Axe%20Mastery.jpg',    
  },
  maceMastery: {
    name: 'Mace Mastery',
    requiredLevel: 1,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/barbarian/combat%20masteries/Mace%20Mastery.jpg',    
  },
  polearmMastery: {
    name: 'Polearm Mastery',
    requiredLevel: 6,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/barbarian/combat%20masteries/Polearm%20Mastery.jpg',    
  },
  throwingMastery: {
    name: 'Throwing Mastery',
    requiredLevel: 6,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/barbarian/combat%20masteries/Throwing%20Mastery.jpg',    
  },
  spearMastery: {
    name: 'Spear Mastery',
    requiredLevel: 6,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/barbarian/combat%20masteries/Spear%20Mastery.jpg',    
  },
  increasedStamina: {
    name: 'Increased Stamina',
    requiredLevel: 12,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/barbarian/combat%20masteries/Increased%20Stamina.jpg',    
  },
  ironSkin: {
    name: 'Iron Skin',
    requiredLevel: 18,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/barbarian/combat%20masteries/Iron%20Skin.jpg',    
  },
  increasedSpeed: {
    name: 'Increased Speed',
    requiredLevel: 24,
    requiredSkills: ['increasedStamina'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/barbarian/combat%20masteries/Increased%20Speed.jpg',   
  },
  naturalResistance: {
    name: 'Natural Resistance',
    requiredLevel: 30,
    requiredSkills: ['ironSkin'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/barbarian/combat%20masteries/Natural%20Resistance.jpg',  
  },
  // Combat Skills
  bash: {
    name: 'Bash',
    requiredLevel: 1,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/barbarian/combat%20skills/Bash.jpg',
  },
  leap: {
    name: 'Leap',
    requiredLevel: 6,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/barbarian/combat%20skills/Leap.jpg',  
  },
  doubleSwing: {
    name: 'Double Swing',
    requiredLevel: 6,
    requiredSkills: ['bash'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/barbarian/combat%20skills/Double%20Swing.jpg',  
  },
  stun: {
    name: 'Stun',
    requiredLevel: 12,
    requiredSkills: ['bash'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/barbarian/combat%20skills/Stun.jpg',  
  },
  doubleThrow: {
    name: 'Double Throw',
    requiredLevel: 12,
    requiredSkills: ['doubleSwing'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/barbarian/combat%20skills/Double%20Throw.jpg',  
  },
  leapAttack: {
    name: 'Leap Attack',
    requiredLevel: 18,
    requiredSkills: ['leap'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/barbarian/combat%20skills/Leap%20Attack.jpg',  
  },
  concentrate: {
    name: 'Concentrate',
    requiredLevel: 18,
    requiredSkills: ['stun'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/barbarian/combat%20skills/Concentrate.jpg',  
  },
  frenzy: {
    name: 'Frenzy',
    requiredLevel: 24,
    requiredSkills: ['doubleThrow'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/barbarian/combat%20skills/Frenzy.jpg',  
  },
  whirlwind: {
    name: 'Whirlwind',
    requiredLevel: 30,
    requiredSkills: ['leapAttack', 'concentrate'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/barbarian/combat%20skills/Whirlwind.jpg',  
  },
  berserk: {
    name: 'Berserk',
    requiredLevel: 30,
    requiredSkills: ['concentrate'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/barbarian/combat%20skills/Berserk.jpg',  
  },
}
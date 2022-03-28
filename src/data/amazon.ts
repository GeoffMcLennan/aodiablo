import { Skill } from ".";


export const amazonSkills: Record<string, Skill> = {
  // Javelin & Spear
  jab: {
    name: 'Jab',
    requiredLevel: 1,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/amazon/javelin%20&%20spear%20skills/Jab.jpg',    
  }, 
  powerStrike: {
    name: 'Power Strike',
    requiredLevel: 6,
    requiredSkills: ['jab'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/amazon/javelin%20&%20spear%20skills/Power%20Strike.jpg',    
  }, 
  poisonJavelin: {
    name: 'Poison Javelin',
    requiredLevel: 6,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/amazon/javelin%20&%20spear%20skills/Poison%20Javelin.jpg',    
  }, 
  impale: {
    name: 'Impale',
    requiredLevel: 12,
    requiredSkills: ['jab'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/amazon/javelin%20&%20spear%20skills/Impale.jpg',    
  },
  lightningBolt: {
    name: 'Lightning Bolt',
    requiredLevel: 12,
    requiredSkills: ['poisonJavelin'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/amazon/javelin%20&%20spear%20skills/Lightning%20Bolt.jpg',    
  },
  chargedStrike: {
    name: 'Charged Strike',
    requiredLevel: 18,
    requiredSkills: ['powerStrike', 'lightningBolt'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/amazon/javelin%20&%20spear%20skills/Charged%20Strike.jpg',    
  },
  plagueJavelin: {
    name: 'Plague Javelin',
    requiredLevel: 18,
    requiredSkills: ['lightningBolt'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/amazon/javelin%20&%20spear%20skills/Plague%20Javelin.jpg',    
  },
  fend: {
    name: 'Fend',
    requiredLevel: 24,
    requiredSkills: ['impale'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/amazon/javelin%20&%20spear%20skills/Fend.jpg',    
  },
  lightningStrike: {
    name: 'Lightning Strike',
    requiredLevel: 30,
    requiredSkills: ['chargedStrike'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/amazon/javelin%20&%20spear%20skills/Lightning%20Strike.jpg',    
  },
  lightningFury: {
    name: 'Lightning Fury',
    requiredLevel: 30,
    requiredSkills: ['plagueJavelin'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/amazon/javelin%20&%20spear%20skills/Lightning%20Fury.jpg',    
  },
  // Passive & Magic
  innerSight: {
    name: 'Inner Sight',
    requiredLevel: 1,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/amazon/passive%20&%20magic%20skills/Inner%20Sight.jpg',    
  },
  criticalStrike: {
    name: 'Critical Strike',
    requiredLevel: 1,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/amazon/passive%20&%20magic%20skills/Critical%20Strike.jpg',    
  },
  dodge: {
    name: 'Dodge',
    requiredLevel: 6,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/amazon/passive%20&%20magic%20skills/Dodge.jpg',    
  },
  slowMissiles: {
    name: 'Slow Missiles',
    requiredLevel: 12,
    requiredSkills: ['innerSight'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/amazon/passive%20&%20magic%20skills/Slow%20Missiles.jpg',    
  },
  avoid: {
    name: 'Avoid',
    requiredLevel: 12,
    requiredSkills: ['dodge'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/amazon/passive%20&%20magic%20skills/Avoid.jpg',    
  },
  penetrate: {
    name: 'Penetrate',
    requiredLevel: 18,
    requiredSkills: ['criticalStrike'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/amazon/passive%20&%20magic%20skills/Penetrate.jpg',    
  },
  decoy: {
    name: 'Decoy',
    requiredLevel: 24,
    requiredSkills: ['slowMissiles'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/amazon/passive%20&%20magic%20skills/Decoy.jpg',    
  },
  evade: {
    name: 'Evade',
    requiredLevel: 24,
    requiredSkills: ['avoid'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/amazon/passive%20&%20magic%20skills/Evade.jpg',    
  },
  valkyrie: {
    name: 'Valkyrie',
    requiredLevel: 30,
    requiredSkills: ['decoy', 'evade'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/amazon/passive%20&%20magic%20skills/Valkyrie.jpg',   
  },
  pierce: {
    name: 'Pierce',
    requiredLevel: 30,
    requiredSkills: ['penetrate'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/amazon/passive%20&%20magic%20skills/Pierce.jpg',  
  },
  // Bow & Crossbow
  magicArrow: {
    name: 'Magic Arrow',
    requiredLevel: 1,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/amazon/bow%20&%20crossbow%20skills/Magic%20Arrow.jpg',
  },
  fireArrow: {
    name: 'Fire Arrow',
    requiredLevel: 1,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/amazon/bow%20&%20crossbow%20skills/Fire%20Arrow.jpg',  
  },
  coldArrow: {
    name: 'Cold Arrow',
    requiredLevel: 6,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/amazon/bow%20&%20crossbow%20skills/Cold%20Arrow.jpg',  
  },
  multipleShot: {
    name: 'Multiple Shot',
    requiredLevel: 6,
    requiredSkills: ['magicArrow'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/amazon/bow%20&%20crossbow%20skills/Multiple%20Shot.jpg',  
  },
  explodingArrow: {
    name: 'Exploding Arrow',
    requiredLevel: 12,
    requiredSkills: ['multipleShot', 'fireArrow'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/amazon/bow%20&%20crossbow%20skills/Exploding%20Arrow.jpg',  
  },
  iceArrow: {
    name: 'Ice Arrow',
    requiredLevel: 18,
    requiredSkills: ['coldArrow'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/amazon/bow%20&%20crossbow%20skills/Ice%20Arrow.jpg',  
  },
  guidedArrow: {
    name: 'Guided Arrow',
    requiredLevel: 18,
    requiredSkills: ['coldArrow', 'multipleShot'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/amazon/bow%20&%20crossbow%20skills/Guided%20Arrow.jpg',  
  },
  strafe: {
    name: 'Strafe',
    requiredLevel: 24,
    requiredSkills: ['guidedArrow'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/amazon/bow%20&%20crossbow%20skills/Strafe.jpg',  
  },
  immolationArrow: {
    name: 'Immolation Arrow',
    requiredLevel: 24,
    requiredSkills: ['explodingArrow'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/amazon/bow%20&%20crossbow%20skills/Immolation%20Arrow.jpg',  
  },
  freezingArrow: {
    name: 'Freezing Arrow',
    requiredLevel: 30,
    requiredSkills: ['iceArrow'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/amazon/bow%20&%20crossbow%20skills/Freezing%20Arrow.jpg',  
  },
}
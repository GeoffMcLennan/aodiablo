import { Skill } from ".";

export const druidSkills: Record<string, Skill> = {
  // Elemental
  firestorm: {
    name: 'Firestorm',
    requiredLevel: 1,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/druid/elemental%20skills/Firestorm.jpg',    
  }, 
  moltenBoulder: {
    name: 'Molten Boulder',
    requiredLevel: 6,
    requiredSkills: ['firestorm'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/druid/elemental%20skills/Molten%20Boulder.jpg',    
  }, 
  arcticBlast: {
    name: 'Arctic Blast',
    requiredLevel: 6,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/druid/elemental%20skills/Arctic%20Blast.jpg',    
  }, 
  fissure: {
    name: 'Fissure',
    requiredLevel: 12,
    requiredSkills: ['moltenBoulder'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/druid/elemental%20skills/Fissure.jpg',    
  },
  cycloneArmor: {
    name: 'Cyclone Armor',
    requiredLevel: 12,
    requiredSkills: ['arcticBlast'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/druid/elemental%20skills/Cyclone%20Armor.jpg',    
  },
  twister: {
    name: 'Twister',
    requiredLevel: 18,
    requiredSkills: ['cycloneArmor'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/druid/elemental%20skills/Twister.jpg',    
  },
  volcano: {
    name: 'Volcano',
    requiredLevel: 24,
    requiredSkills: ['fissure'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/druid/elemental%20skills/Volcano.jpg',    
  },
  tornado: {
    name: 'Tornado',
    requiredLevel: 24,
    requiredSkills: ['twister'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/druid/elemental%20skills/Tornado.jpg',    
  },
  armageddon: {
    name: 'Armageddon',
    requiredLevel: 30,
    requiredSkills: ['volcano', 'hurricane'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/druid/elemental%20skills/Armageddon.jpg',    
  },
  hurricane: {
    name: 'Hurricane',
    requiredLevel: 30,
    requiredSkills: ['tornado'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/druid/elemental%20skills/Hurricane.jpg',    
  },
  // Shape Shifting
  werewolf: {
    name: 'Werewolf',
    requiredLevel: 1,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/druid/shape%20shifting%20skills/Werewolf.jpg',    
  },
  lycanthropy: {
    name: 'Lycanthropy',
    requiredLevel: 1,
    requiredSkills: ['werewolf'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/druid/shape%20shifting%20skills/Lycanthropy.jpg',    
  },
  werebear: {
    name: 'Werebear',
    requiredLevel: 6,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/druid/shape%20shifting%20skills/Werebear.jpg',    
  },
  feralRage: {
    name: 'Feral Rage',
    requiredLevel: 12,
    requiredSkills: ['werewolf'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/druid/shape%20shifting%20skills/Feral%20Rage.jpg',    
  },
  maul: {
    name: 'Maul',
    requiredLevel: 12,
    requiredSkills: ['werebear'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/druid/shape%20shifting%20skills/Maul.jpg',    
  },
  rabies: {
    name: 'Rabies',
    requiredLevel: 18,
    requiredSkills: ['feralRage'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/druid/shape%20shifting%20skills/Rabies.jpg',    
  },
  fireClaws: {
    name: 'Fire Claws',
    requiredLevel: 18,
    requiredSkills: ['feralRage', 'maul'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/druid/shape%20shifting%20skills/Fire%20Claws.jpg',    
  },
  hunger: {
    name: 'Hunger',
    requiredLevel: 24,
    requiredSkills: ['fireClaws'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/druid/shape%20shifting%20skills/Hunger.jpg',    
  },
  shockWave: {
    name: 'Shock Wave',
    requiredLevel: 24,
    requiredSkills: ['maul'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/druid/shape%20shifting%20skills/Shock%20Wave.jpg',   
  },
  fury: {
    name: 'Fury',
    requiredLevel: 30,
    requiredSkills: ['rabies'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/druid/shape%20shifting%20skills/Fury.jpg',  
  },
  // Summoning
  raven: {
    name: 'Raven',
    requiredLevel: 1,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/druid/summoning%20skills/Raven.jpg',
  },
  poisonCreeper: {
    name: 'Poison Creeper',
    requiredLevel: 1,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/druid/summoning%20skills/Poison%20Creeper.jpg',  
  },
  oakSage: {
    name: 'Oak Sage',
    requiredLevel: 6,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/druid/summoning%20skills/Oak%20Sage.jpg',  
  },
  summonSpiritWolf: {
    name: 'Summon Spirit Wolf',
    requiredLevel: 6,
    requiredSkills: ['raven'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/druid/summoning%20skills/Summon%20Spirit%20Wolf.jpg',  
  },
  carrionVine: {
    name: 'Carrion Vine',
    requiredLevel: 12,
    requiredSkills: ['poisonCreeper'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/druid/summoning%20skills/Carrion%20Vine.jpg',  
  },
  heartOfWolverine: {
    name: 'Heart of Wolverine',
    requiredLevel: 18,
    requiredSkills: ['oakSage'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/druid/summoning%20skills/Heart%20of%20Wolverine.jpg',  
  },
  summonDireWolf: {
    name: 'Summon Dire Wolf',
    requiredLevel: 18,
    requiredSkills: ['oakSage', 'summonSpiritWolf'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/druid/summoning%20skills/Summon%20Dire%20Wolf.jpg',  
  },
  solarCreeper: {
    name: 'Solar Creeper',
    requiredLevel: 24,
    requiredSkills: ['carrionVine'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/druid/summoning%20skills/Solar%20Creeper.jpg',  
  },
  spiritOfBarbs: {
    name: 'Spirit of Barbs',
    requiredLevel: 30,
    requiredSkills: ['heartOfWolverine'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/druid/summoning%20skills/Spirit%20of%20Barbs.jpg',  
  },
  summonGrizzly: {
    name: 'Summon Grizzly',
    requiredLevel: 30,
    requiredSkills: ['summonDireWolf'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/druid/summoning%20skills/Summon%20Grizzly.jpg',  
  },
}
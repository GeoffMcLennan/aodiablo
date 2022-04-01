import { Skill } from ".";

export const necromancerSkills: Record<string, Skill> = {
  // Summoning Spells
  skeletonMastery: {
    name: 'Skeleton Mastery',
    requiredLevel: 1,
    requiredSkills: ['raiseSkeleton'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/necromancer/summoning%20spells/Skeleton%20Mastery.jpg',    
  }, 
  raiseSkeleton: {
    name: 'Raise Skeleton',
    requiredLevel: 1,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/necromancer/summoning%20spells/Raise%20Skeleton.jpg',    
  }, 
  clayGolem: {
    name: 'Clay Golem',
    requiredLevel: 6,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/necromancer/summoning%20spells/Clay%20Golem.jpg',    
  }, 
  golemMastery: {
    name: 'Golem Mastery',
    requiredLevel: 12,
    requiredSkills: ['clayGolem'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/necromancer/summoning%20spells/Golem%20Mastery.jpg',    
  },
  raiseSkeletalMage: {
    name: 'Raise Skeletal Mage',
    requiredLevel: 12,
    requiredSkills: ['raiseSkeleton'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/necromancer/summoning%20spells/Raise%20Skeletal%20Mage.jpg',    
  },
  bloodGolem: {
    name: 'Blood Golem',
    requiredLevel: 18,
    requiredSkills: ['clayGolem'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/necromancer/summoning%20spells/Blood%20Golem.jpg',    
  },
  summonResist: {
    name: 'Summon Resist',
    requiredLevel: 24,
    requiredSkills: ['golemMastery'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/necromancer/summoning%20spells/Summon%20Resist.jpg',    
  },
  ironGolem: {
    name: 'Iron Golem',
    requiredLevel: 24,
    requiredSkills: ['bloodGolem'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/necromancer/summoning%20spells/Iron%20Golem.jpg',    
  },
  fireGolem: {
    name: 'Fire Golem',
    requiredLevel: 30,
    requiredSkills: ['ironGolem'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/necromancer/summoning%20spells/Fire%20Golem.jpg',    
  },
  revive: {
    name: 'Revive',
    requiredLevel: 30,
    requiredSkills: ['ironGolem', 'raiseSkeletalMage'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/necromancer/summoning%20spells/Revive.jpg',    
  },
  // Poison & Bone
  teeth: {
    name: 'Teeth',
    requiredLevel: 1,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/necromancer/poison%20&%20bone%20spells/Teeth.jpg',    
  },
  boneArmor: {
    name: 'Bone Armor',
    requiredLevel: 1,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/necromancer/poison%20&%20bone%20spells/Bone%20Armor.jpg',    
  },
  poisonDagger: {
    name: 'Poison Dagger',
    requiredLevel: 6,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/necromancer/poison%20&%20bone%20spells/Poison%20Dagger.jpg',    
  },
  corpseExplosion: {
    name: 'Corpse Explosion',
    requiredLevel: 6,
    requiredSkills: ['teeth'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/necromancer/poison%20&%20bone%20spells/Corpse%20Explosion.jpg',    
  },
  boneWall: {
    name: 'Bone Wall',
    requiredLevel: 12,
    requiredSkills: ['boneArmor'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/necromancer/poison%20&%20bone%20spells/Bone%20Wall.jpg',    
  },
  poisonExplosion: {
    name: 'Poison Explosion',
    requiredLevel: 18,
    requiredSkills: ['poisonDagger', 'corpseExplosion'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/necromancer/poison%20&%20bone%20spells/Poison%20Explosion.jpg',    
  },
  boneSpear: {
    name: 'Bone Spear',
    requiredLevel: 18,
    requiredSkills: ['corpseExplosion'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/necromancer/poison%20&%20bone%20spells/Bone%20Spear.jpg',    
  },
  bonePrison: {
    name: 'Bone Prison',
    requiredLevel: 24,
    requiredSkills: ['boneSpear', 'boneWall'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/necromancer/poison%20&%20bone%20spells/Bone%20Prison.jpg',    
  },
  poisonNova: {
    name: 'Poison Nova',
    requiredLevel: 30,
    requiredSkills: ['poisonExplosion'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/necromancer/poison%20&%20bone%20spells/Poison%20Nova.jpg',   
  },
  boneSpirit: {
    name: 'Bone Spirit',
    requiredLevel: 30,
    requiredSkills: ['boneSpear'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/necromancer/poison%20&%20bone%20spells/Bone%20Spirit.jpg',  
  },
  // Curses
  amplifyDamage: {
    name: 'Amplify Damage',
    requiredLevel: 1,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/necromancer/curses/Amplify%20Damage.jpg',
  },
  dimVision: {
    name: 'Dim Vision',
    requiredLevel: 6,
    requiredSkills: [],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/necromancer/curses/Dim%20Vision.jpg',  
  },
  weaken: {
    name: 'Weaken',
    requiredLevel: 6,
    requiredSkills: ['amplifyDamage'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/necromancer/curses/Weaken.jpg',  
  },
  ironMaiden: {
    name: 'Iron Maiden',
    requiredLevel: 12,
    requiredSkills: ['amplifyDamage'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/necromancer/curses/Iron%20Maiden.jpg',  
  },
  terror: {
    name: 'Terror',
    requiredLevel: 12,
    requiredSkills: ['weaken'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/necromancer/curses/Terror.jpg',  
  },
  confuse: {
    name: 'Confuse',
    requiredLevel: 18,
    requiredSkills: ['dimVision'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/necromancer/curses/Confuse.jpg',  
  },
  lifeTap: {
    name: 'Life Tap',
    requiredLevel: 18,
    requiredSkills: ['ironMaiden'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/necromancer/curses/Life%20Tap.jpg',  
  },
  attract: {
    name: 'Attract',
    requiredLevel: 24,
    requiredSkills: ['confuse'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/necromancer/curses/Attract.jpg',  
  },
  decrepify: {
    name: 'Decrepify',
    requiredLevel: 24,
    requiredSkills: ['terror'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/necromancer/curses/Decrepify.jpg',  
  },
  lowerResist: {
    name: 'Lower Resist',
    requiredLevel: 30,
    requiredSkills: ['lifeTap', 'decrepify'],
    image: 'https://static.icy-veins.com/images/d2/skill-calculator/skills/necromancer/curses/Lower%20Resist.jpg',  
  },
}
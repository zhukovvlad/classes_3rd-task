/* eslint-disable max-classes-per-file */
export default class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.level = 1;
    this.isPowerModeUsed = false;
    this.attackQuantity = 0;
    this.powerAttackQuantity = 0;

    if (this.isPowerModeUsed === true && this.powerAttackQuantity > 3) {
      this.health = this.health / 2;
      this.attack /= 2;
      this.defence /= 2;
    }
  }

  set powerMode(value) {
    if (value !== 'on') throw new Error('To turn on powerMode value should be equal to \'on\'');
    if (this.isPowerModeUsed === true) throw new Error('You have already activated powerMode.');
    this.isPowerModeUsed = true;
    if (this.isPowerModeUsed === true && this.powerAttackQuantity <= 3) {
      this.health *= 2;
      this.attack *= 2;
      this.defence *= 2;
    }
    if (this.powerAttackQuantity > 3) {
      this.health /= 2;
      this.attack /= 2;
      this.defence /= 2;
    }
  }

  get powerMode() {
    return `Health is ${this.health}. Attack is ${this.attack}. Defence is ${this.defence}`;
  }

  makeAttack() {
    if (this.isPowerModeUsed === true) {
      this.powerAttackQuantity += 1;
    }
    this.attackQuantity += 1;
  }

  levelUp() {
    if (this.health <= 0) throw new Error('It is possible to increase level only if character is alive.');
    this.level += 1;
    this.health = 100;
    this.attack = this.attack * 1.2;
    this.defence = this.defence * 1.2;
  }
}

export class Bowerman extends Character {
  constructor(...params) {
    super(...params);
    this.type = 'Bowman';
    this.attack = 25;
    this.defence = 25;
  }
}

export class Swordsman extends Character {
  constructor(...params) {
    super(...params);
    this.type = 'Swordsman';
    this.attack = 40;
    this.defence = 10;
  }
}

export class Magician extends Character {
  constructor(...params) {
    super(...params);
    this.type = 'Magician';
    this.attack = 10;
    this.defence = 40;
  }
}

export class Undead extends Character {
  constructor(...params) {
    super(...params);
    this.type = 'Undead';
    this.attack = 25;
    this.defence = 25;
  }
}

export class Zombie extends Character {
  constructor(...params) {
    super(...params);
    this.type = 'Zombie';
    this.attack = 40;
    this.defence = 10;
  }
}

export class Daemon extends Character {
  constructor(...params) {
    super(...params);
    this.type = 'Daemon';
    this.attack = 10;
    this.defence = 40;
  }
}

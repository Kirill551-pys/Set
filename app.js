    export class Team {
    constructor() {
      this.members = new Set();
    }
  
    add(character) {
      if (this.members.has(character)) {
        throw new Error(`Персонаж ${character.name} уже есть в команде`);
      }
      this.members.add(character);
    }
  
    addAll(...characters) {
      characters.forEach((character) => {
        if (this.members.has(character)) {
          return; // skip duplicates
        }
        this.members.add(character);
      });
    }
  
    toArray() {
      return Array.from(this.members);
    }
  }
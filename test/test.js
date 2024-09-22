import Team from './Team';
import Character from './Character';

describe('Team', () => {
    let team;
  
    beforeEach(() => {
      team = new Team();
    });
  
    it('добавляет персонажа в команду', () => {
      const character = new Character('Warrior');
      team.add(character);
      expect(team.toArray()).toEqual([character]);
    });
  
    it('выдает ошибку при добавлении повторяющегося символа', () => {
      const character = new Character('Warrior');
      team.add(character);
      expect(() => team.add(character)).toThrowError(`Персонаж Воин уже есть в команде`);
    });
  
    it('добавляет в команду несколько персонажей', () => {
      const characters = [
        new Character('Warrior'),
        new Character('Mage'),
        new Character('Archer'),
      ];
      team.addAll(...characters);
      expect(team.toArray()).toEqual(characters);
    });
  
    it('игнорирует повторяющиеся символы при добавлении нескольких', () => {
      const characters = [
        new Character('Warrior'),
        new Character('Mage'),
        new Character('Warrior'), // duplicate
      ];
      team.addAll(...characters);
      expect(team.toArray()).toEqual([
        new Character('Warrior'),
        new Character('Mage'),
      ]);
    });
  
    it('преобразует команду в массив', () => {
      const characters = [
        new Character('Warrior'),
        new Character('Mage'),
        new Character('Archer'),
      ];
      team.addAll(...characters);
      expect(team.toArray()).toEqual(characters);
    });
  });
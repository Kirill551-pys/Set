import { Team } from './app.js';

describe('Team', () => {
  let team;
  let character1;
  let character2;

  beforeEach(() => {
    team = new Team();
    character1 = { name: 'Character 1' };
    character2 = { name: 'Character 2' };
  });

  it('добавляем персонажа в команду', () => {
    team.add(character1);
    expect(team.toArray()).toEqual([character1]);
  });

  it('при дублирование персонажа должна появляться ошибка', () => {
    team.add(character1);
    expect(() => team.add(character1)).toThrowError(`Персонаж ${character1.name} уже есть в команде`);
  });

  it('добавляем несколько персонажей в команду', () => {
    team.addAll(character1, character2);
    expect(team.toArray()).toEqual([character1, character2]);
  });

  it('пропускаем дублирование', () => {
    team.addAll(character1, character2, character1);
    expect(team.toArray()).toEqual([character1, character2]);
  });

  it('перобразуем команду в массив', () => {
    team.add(character1);
    team.add(character2);
    expect(team.toArray()).toEqual([character1, character2]);
  });
});
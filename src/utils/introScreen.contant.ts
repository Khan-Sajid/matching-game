export enum Buttons {
  start = "start",
  play = "play",
  next = "next",
  yes = "yes",
}

export const intro = [
  { text: "Welcome Kiddo!", button: Buttons.start },
  { text: "Hi , I am Mizo! and I love bananas", button: Buttons.next },
  { text: "Can you help me get some ?", button: Buttons.yes },
];

export enum CurrentScreen {
  Intro = "intro",
  Instruction = "instruction",
  activity = "activity",
  reward = "reward",
}

export enum CardsName {
  Apple = "apple",
  A = "A",
  Orange = "orange",
  O = "o",
}

export const Data = [
  {
    id: 1,
    fruitCard: CardsName.Apple,
    fruitNameCard: CardsName.A,
  },
  {
    id: 2,
    fruitCard: CardsName.Orange,
    fruitNameCard: CardsName.O,
  },
  {
    id: 3,
    fruitCard: CardsName.Apple,
    fruitNameCard: CardsName.A,
  },
  {
    id: 4,
    fruitCard: CardsName.Orange,
    fruitNameCard: CardsName.O,
  },
  {
    id: 5,
    fruitCard: CardsName.Apple,
    fruitNameCard: CardsName.A,
  },
  {
    id: 6,
    fruitCard: CardsName.Orange,
    fruitNameCard: CardsName.O,
  },
];

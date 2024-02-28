import { CardsName } from "./introScreen.contant";

export interface CardData {
  id: number;
  fruitCard: CardsName;
  fruitNameCard: CardsName;
  clicked?: boolean;
}

export interface SelectedCardsData {
  selectedFruit?: CardData;
  selectedName?: CardData;
  clicked?: true;
}

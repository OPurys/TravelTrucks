interface Review {
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
}

interface Gallery {
  thumb: string;
  original: string;
}

export interface Camper {
  id: string;
  name: string;
  rating: number;
  reviews: Review[];
  location: string;
  price: number;
  gallery: Gallery[];
  description: string;
  transmission: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  engine: string;
  AC: boolean;
  bathroom: boolean;
  TV: boolean;
  kitchen: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
}

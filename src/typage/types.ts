export interface TypeTitle {
  titre: string;
  description?: string;
}

export interface Chambre {
  id: number;
  type: string;
  rating: number;
  avis: number;
  title: string;
  description: string;
  image: string;
  badge: boolean;
}
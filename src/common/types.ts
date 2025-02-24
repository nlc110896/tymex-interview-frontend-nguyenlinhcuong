export interface IAuthor {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  avatar: string;
  onlineStatus: string;
}

export interface ICardDetail {
  id: number;
  title: string;
  category:
    | 'Upper Body'
    | 'Lower Body'
    | 'Hat'
    | 'Shoes'
    | 'Accessory'
    | 'Legendary'
    | 'Mythic'
    | 'Epic'
    | 'Rare'
    | 'Common'
    | string;
  price: number;
  isFavorite: boolean;
  createdAt: number;
  theme: 'Dark' | 'Light' | 'Colorful' | 'Halloween' | string;
  tier: 'Basic' | 'Premium' | 'Deluxe' | string;
  imageId: number;
  author: IAuthor;
}

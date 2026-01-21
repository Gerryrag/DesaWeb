
export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export interface UMKMProduct {
  id: string;
  name: string;
  owner: string;
  description: string;
  price: string;
  image: string;
}

export interface VillageInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  workingHours: string;
}

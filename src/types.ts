export interface IUser {
  id: number;
  name: string;
  phone: string;
  username: string;
  urlToImage: string;
  title: string;
}
export interface INews {
  urlToImage: string;
  title: string;
}

export interface IProducts {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

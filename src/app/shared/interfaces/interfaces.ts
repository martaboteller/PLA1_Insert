export interface rankExtension {
  id: number;
  extName: string;
  extAuthor: string;
  extDescription: string;
  extRating: number;
  extDownloads: number;
  extImg: string;
  extEmail: string;
  extFav: boolean;
}

export interface IUser {
  idUser: number;
  name: string;
  surname: string;
  email: string;
  admin: boolean;
}

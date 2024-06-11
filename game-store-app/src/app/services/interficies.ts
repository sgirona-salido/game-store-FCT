export interface IProducts {
  id: string;
  name: string;
  description: string;
  businessId: string;
  tags: string[];
  productImage: string;
  sourceList: string[];
  officialWebsite: string;
  price: number;
  releaseDate : Date | null;
  productCover : string;
}

export interface IProductsForm {
  name: string;
  description: string;
  businessId: string;
  tags: string[];
  productImage: string;
  sourceList: string[];
  officialWebsite: string;
  price: number;
  releaseDate : Date | null;
}

export interface IBusiness {
  id : string
  cif: string;
  buisnessName: string;
}

export interface ITags {
  id: string;
  type: string;
}

export interface IProductItemDto {
  product: IProducts;
  business: IBusiness;
}

export interface IVideo extends IProducts{
  minPlayers: number;
  maxPlayers: number;
  platforms: string[];
  digital: boolean;
  physical: boolean;
}

export interface ITokenResponse {
  access_token: string;
  refresh_token: string;
  scope: string;
  id_token: string;
  token_type: string;
  expires_in: number;
}

export enum AuthorizationKeys{
  access_token = "access_token",
  code = "code"
}

export interface ILoginInfo {
  username: string;
  password: string;
}

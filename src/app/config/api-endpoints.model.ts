export interface IApiEndpoint {
  path: string;
}

export interface IApiEndpoints {
  login: IApiEndpoint;
  register: IApiEndpoint;
  storeGamePoints: IApiEndpoint;
  getUserGamePoints: IApiEndpoint;
  getAllGamePoints: IApiEndpoint;
}

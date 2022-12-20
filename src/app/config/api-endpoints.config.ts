import { environment } from 'src/environments/environment';
import { IApiEndpoint, IApiEndpoints } from './api-endpoints.model';

export const getEndpoint = (endpoint: keyof IApiEndpoints): IApiEndpoint => {
  return { path: `${environment.baseApiUrl}${apiEndpoints[endpoint].path}` };
};

const apiEndpoints: IApiEndpoints = {
  login: { path: 'auth/login' },
  register: { path: 'auth/register' },
  storeGamePoints: { path: 'gamePoints/' },
  getUserGamePoints: { path: 'gamePoints/user' },
  getAllGamePoints: { path: 'gamePoints/' },
};

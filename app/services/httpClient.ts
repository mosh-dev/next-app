import {Observable} from 'rxjs';
import {AxiosRequestConfig} from 'axios';
import {fromPromise} from 'rxjs/internal-compatibility';

export class HttpClient {
  private static instance: HttpClient;
  private axios = require('axios')
    .default
    .create({
      baseURL: process.env.BLOGGER_URL
    });

  private constructor() {
    /**
     * Configure Interceptor
     */
    this.axios.interceptors.request.use(config => config);
  }

  public static getInstance(): HttpClient {
    if (!HttpClient.instance) {
      HttpClient.instance = new HttpClient();
    }
    return HttpClient.instance;
  }


  get(url: string, config?: AxiosRequestConfig): Observable<any> {
    return fromPromise(this.axios.get(url, config || {}));
  }
}

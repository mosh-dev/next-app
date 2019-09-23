import {HttpClient} from './httpClient';

export class CommonDataService {
  private static instance: CommonDataService;
  private http = HttpClient.getInstance();

  private constructor() {
  }

  public static getInstance(): CommonDataService {
    if (!CommonDataService.instance) {
      CommonDataService.instance = new CommonDataService();
    }
    return CommonDataService.instance;
  }

  async getPosts() {
    return this.http.get('posts')
      .toPromise()
      .then(res => res.data)
      .catch();
  }
}

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainMenuHttpService {

  constructor(
    private httpService: HttpClient
  ) { }


  getStaticListData(link: string): Observable<any> {
    return this.httpService.get(link);
  }
}

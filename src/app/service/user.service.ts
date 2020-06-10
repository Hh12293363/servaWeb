import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoguserInfo, ResLogin } from '../verify/login/loguser-info';
import { Result } from '../common/result';
import { map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://106.12.148.165:9080/manage/';

  constructor(private http: HttpClient) {

  }

  login(user: LoguserInfo) {
    return this.http.post<Result<ResLogin>>(this.url + 'login', user).pipe(
      map((r: Result<ResLogin>) => {
        if (r.code === 0) {
          localStorage.ResLogin = r.data;
          return true;
        } else {
          return false;
        }
      }),
      catchError(error => of(false))
    )
  }
}

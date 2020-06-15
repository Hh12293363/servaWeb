import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoguserInfo, ResLogin } from '../verify/login/loguser-info';
import { Result } from '../common/result';
import { map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://106.12.148.165:9080/manage/admin/';
  
  constructor(private http: HttpClient) {

  }

  login(user: LoguserInfo) {    
    
    return this.http.post<Result<ResLogin>>(this.url + 'login?_allow_anonymous=true', user).pipe(
      map((r: Result<ResLogin>) => {
        if (r.code === 0) {
          // console.log(r);
          localStorage.ResLogin = r.data;
          return true;
        } else {
          return false;
        }
      }),
      catchError(error => of(false))
    )
  }

  GetMakerOwnerEquipment(){
    let params: any = {};
    params.port = '1';
    params.adminId = localStorage.ResLogin.id;
    return this.http.get<Result<any>>(this.url + '/makerOwnerEquipment', params);
  }

}

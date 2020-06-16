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
  public userInfo: ResLogin;

  constructor(private http: HttpClient) {

  }

  login(user: LoguserInfo) {

    return this.http.post<Result<ResLogin>>(this.url + 'login?_allow_anonymous=true', user).pipe(
      map((r: Result<ResLogin>) => {
        // console.log(r)
        if (r.code === 0) {
          this.userInfo = new ResLogin();
          this.userInfo.id = r.data.id;
          this.userInfo.account = r.data.account;
          this.userInfo.accountType = r.data.accountType;
          this.userInfo.add_time = r.data.add_time;
          this.userInfo.adminAccount = r.data.adminAccount;
          this.userInfo.app_token = r.data.app_token;
          this.userInfo.city = r.data.city;
          this.userInfo.county = r.data.county;
          this.userInfo.list = r.data.list;// list: ;
          this.userInfo.logo = r.data.logo;
          this.userInfo.makerParentId = r.data.makerParentId;
          this.userInfo.newPassword = r.data.newPassword;
          this.userInfo.only_key = r.data.only_key;
          this.userInfo.parent_id = r.data.parent_id;
          this.userInfo.password = r.data.password;
          this.userInfo.real_name = r.data.real_name;
          this.userInfo.recognition_code = r.data.recognition_code;
          this.userInfo.remark = r.data.remark;
          this.userInfo.roleId = r.data.roleId;
          this.userInfo.role_id = r.data.role_id;
          this.userInfo.state = r.data.state;
          this.userInfo.tel = r.data.tel;
          this.userInfo.token = r.data.token;
          console.log(this.userInfo);
          return true;
        } else {
          return false;
        }
      }),
      catchError(error => of(false))
    )
  }

  GetMakerOwnerEquipment() {
    let params: any = {};
    params.port = '1';
    params.adminId = localStorage.ResLogin.id;
    return this.http.get<Result<any>>(this.url + '/makerOwnerEquipment', params);
  }

}

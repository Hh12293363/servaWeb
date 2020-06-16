import { Component, OnInit } from '@angular/core';
import { LoguserInfo,ResLogin } from '../login/loguser-info';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-veryfy-info',
  templateUrl: './veryfy-info.component.html',
  styleUrls: ['./veryfy-info.component.css']
})
export class VeryfyInfoComponent implements OnInit {

  model: LoguserInfo;

  constructor(private us:UserService,
              private tk:TokenService,
              private router:Router) {
    this.model = new LoguserInfo();
   }

  ngOnInit() {
  }

  login(){
    this.us.login(this.model).subscribe(
      (result:boolean)=>{
        if(result){
          //设置token
          this.tk.setToken(this.us.userInfo.token);
          
          //导航到home
          this.router.navigate(['/main/home']);

        }else{
          console.log(result)
          alert('登录失败');
        }
      }
    )
    
  }

}

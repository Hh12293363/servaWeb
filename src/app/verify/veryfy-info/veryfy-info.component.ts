import { Component, OnInit } from '@angular/core';
import { LoguserInfo } from '../login/loguser-info';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veryfy-info',
  templateUrl: './veryfy-info.component.html',
  styleUrls: ['./veryfy-info.component.css']
})
export class VeryfyInfoComponent implements OnInit {

  model: LoguserInfo;

  constructor(private us:UserService,
              private router:Router) {
    this.model = new LoguserInfo();
   }

  ngOnInit() {
  }


  login(){
    this.us.login(this.model).subscribe(
      (result:boolean)=>{
        if(result){
          this.router.navigate(['/home']);
        }else{
          alert('登录失败');
        }
      }
    )
    
  }

}

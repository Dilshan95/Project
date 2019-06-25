import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model:any={};
  errors=false;

  constructor(private authservice:AuthService, private router : Router) { }

  ngOnInit() {
  }

  login(){
   // this.route.navigate(['/home']);
      console.log(this.model);
      this.authservice.login(this.model).subscribe(next=>{
        this.router.navigate(['/home']);
      },(error:Response)=>{
        
        if(error.status===400){
          this.errors= true;
          console.log(error);
        }
        else alert('Unexpected error found');
      });
      
    
  }
}

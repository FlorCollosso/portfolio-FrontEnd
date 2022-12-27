import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/models/login-user';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-start-session',
  templateUrl: './start-session.component.html',
  styleUrls: ['./start-session.component.css']
})

export class StartSessionComponent implements OnInit {

  isLoggedIn: boolean = false;
  isLogginFail: boolean = false;
  loginUser!: LoginUser;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsg!: string;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) {
   
  }

  ngOnInit(): void {
    if(this.tokenService.getToken()) {
      this.isLoggedIn = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.loginUser = new LoginUser(this.nombreUsuario, this.password);
     this.authService.login(this.loginUser).subscribe(data => {
        this.isLoggedIn = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['/portfolio'])
      }, err =>{
        this.isLoggedIn = false;
        this.isLogginFail = true;
        this.errMsg = err.error.mensaje;
        alert('Usuario o contraseña incorrectos');
      })
  }

}

import { Component } from '@angular/core';
import { TokenService } from '../token.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent {

  loginForm: FormGroup;
  token: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: TokenService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
  
  login() {
    const { username, password } = this.loginForm.value;
    this.authService.login(username, password).subscribe(
      response => {
        const token = response.token;
        // Atualiza a propriedade 'token' da classe
        this.token = token;
        // Faça o que desejar com o token (por exemplo, armazenar no armazenamento local)
        console.log(token);
      },
     
    );
  }











}

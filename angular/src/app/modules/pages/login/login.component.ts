import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loading: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onLogin(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.router.navigate(['features/dashboard']);
    }, 1000);
  }
}

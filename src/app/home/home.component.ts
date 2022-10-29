import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;

  constructor(
    private userService: UserService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  addtocard(){
    this.route.navigate(['/card']);
  }

  addToSign(){
    this.route.navigate(['/register'])
  }
}

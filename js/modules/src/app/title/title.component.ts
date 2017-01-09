import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../core/user.service.ts';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input() subtitle = '';
  title: string = 'Angular Modules';
  user: string = '';

  constructor(userService: UserService) {
    this.user = userService.userName;
  }

  ngOnInit() {
  }

}

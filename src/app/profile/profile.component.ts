import { Component, OnInit } from '@angular/core';
import { GetUserService } from 'src/services/get-user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: any;

  address:any='';

  constructor(private getUserService: GetUserService) {}

  ngOnInit(): void {
    this.getUserService.getSingleUser().subscribe((res) => {
      this.user=res;
    });
  }
}

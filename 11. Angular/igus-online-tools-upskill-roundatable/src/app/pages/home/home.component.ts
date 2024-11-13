import { Component, inject } from '@angular/core';
import { ProfileService } from '../../shared/service/profile.service';
import { ProfileInterface } from '../../shared/model/profile-interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private profileService = inject(ProfileService)
  public users: ProfileInterface[] = []
  public  viewMode: number = 2;

  constructor() {
    this.getProfile()
  }
  private getProfile() {
    this.profileService.getProfiles().subscribe((profile: ProfileInterface[])  => {
      this.users = profile

    })
  }


}

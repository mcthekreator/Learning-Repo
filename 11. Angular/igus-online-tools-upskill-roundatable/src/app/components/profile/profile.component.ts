import { Component, inject, Input, input, OnInit } from '@angular/core';
import { ProfileService } from '../../shared/service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  standalone: true
})
export class ProfileComponent {
  @Input() name!: string;
  @Input() username!: string;
}

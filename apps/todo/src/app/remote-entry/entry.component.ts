import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UserService } from '@ng-mf/data-access-user/user';
import { DataStoreService } from '@ng-mf/data-access-user/data-store';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'app-todo-entry',
  template: `
    <app-nx-welcome></app-nx-welcome>`
})
export class RemoteEntryComponent {
  constructor(private userService: UserService, private dataStoreService: DataStoreService) {
  }
}

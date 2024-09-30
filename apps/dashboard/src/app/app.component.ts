import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '@ng-mf/data-access-user/user';
import { distinctUntilChanged } from 'rxjs/operators';
import { DataStoreService } from '@ng-mf/data-access-user/data-store';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'ng-mf-root',
  template: `
    <div class="dashboard-nav">Admin Dashboard</div>
    <ul>
      <li><a routerLink="/">Dashboard</a></li>
      <li><a routerLink="/todo">Todo</a></li>
    </ul>
    <div *ngIf="isLoggedIn$ | async; else signIn">
      You are authenticated so you can see this content.
    </div>
    <ng-template #signIn>
      <router-outlet></router-outlet>
    </ng-template>
  `
})
export class AppComponent implements OnInit {
  isLoggedIn$ = this.userService.isUserLoggedIn$;

  constructor(private userService: UserService, private router: Router, private dataStoreService: DataStoreService) {
  }

  ngOnInit() {
    this.isLoggedIn$
      .pipe(distinctUntilChanged())
      .subscribe(async (loggedIn) => {
        // Queue the navigation after initialNavigation blocking is completed
        setTimeout(() => {
          if (!loggedIn) {
            this.router.navigateByUrl('login');
          } else {
            this.router.navigateByUrl('');
          }
        });
      });
  }
}

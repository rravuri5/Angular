import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { TeamdetailsComponent } from './teamdetails/teamdetails.component';

const routes: Routes = [{path:"",redirectTo:'/dashboard','pathMatch':'full'},
{path :"dashboard",component:DashboardComponent},
  {path:"leaderboard",component:LeaderboardComponent},
  {path:"teamdetails",component:TeamdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

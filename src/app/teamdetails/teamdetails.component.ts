import { Component, OnInit } from '@angular/core';
import { TeamDetails } from 'src/teamdetails';
import { DataService } from '../data.service';

@Component({
  selector: 'app-teamdetails',
  templateUrl: './teamdetails.component.html',
  styleUrls: ['./teamdetails.component.css']
})
export class TeamdetailsComponent implements OnInit {
teamdetails:TeamDetails[];
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.dataservice.getTeamDetails().subscribe(teamdetails=>this.teamdetails=this.teamdetails);
  }

}

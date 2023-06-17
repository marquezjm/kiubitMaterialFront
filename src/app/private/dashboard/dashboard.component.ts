import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private sidenavService:SidenavService,private dashboardService:DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getUltimoVisto().subscribe(data=>{
      console.log(data)
    })
  }

  click(){
    this.sidenavService.togglePrivate()
  }
}

import { Component, OnInit } from '@angular/core';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private sidenavService:SidenavService) { }

  ngOnInit(): void {
  }

  click(){
    this.sidenavService.togglePrivate()
  }
}

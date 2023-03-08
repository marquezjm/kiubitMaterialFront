import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NavbarService } from '../services/navbar.service';
import { SidenavService } from '../services/sidenav.service';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit,AfterViewInit {

  @ViewChild('sidenav') sidenav!:SidenavComponent
  @ViewChild('navbar') navbar!:ElementRef
  
  scroll:number=0
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event:any) {
    console.log(document.documentElement.scrollTop);
    this.scroll=document.documentElement.scrollTop
  }

  constructor(public sideNavService:SidenavService,private service: NavbarService) { }
  ngAfterViewInit(): void {
    console.log(this.navbar?.nativeElement.offsetHeight);
    
    this.service.altura=this.navbar?.nativeElement.offsetHeight
  }

  ngOnInit(): void {
  }


}

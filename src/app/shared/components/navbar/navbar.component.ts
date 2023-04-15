import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { NavbarService } from 'src/app/services/navbar.service';
import { SidenavService } from 'src/app/services/sidenav.service';
import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  @ViewChild('sidenav') sidenav!:SidenavComponent
  @ViewChild('navbar') navbar!:ElementRef
  mostrar:boolean=true
  
  scroll:number=0
  /*@HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event:any) {
    this.scroll=document.documentElement.scrollTop
  }*/

  

  urls:string[]=['#/public/login','#/public/registrar']

  constructor(private route: Router,private activatedRoute:ActivatedRoute,public sideNavService:SidenavService,private cd:ChangeDetectorRef) {}
  ngOnInit(): void {
    console.log(window.location.hash);
    this.urls.forEach(valor=>{
      if(window.location.hash.startsWith(valor)){
        this.mostrar=false
      }
    })

    this.route.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.rootRoute(this.activatedRoute)),
      filter((route: ActivatedRoute) => route.outlet === 'primary'),
    ).subscribe((route: ActivatedRoute) => {
      console.log(window.location.hash)
      this.mostrar=true
      this.urls.forEach(valor=>{
      if(window.location.hash.startsWith(valor)){
        this.mostrar=false
      }
      console.log(this.mostrar);
      this.cd.detectChanges()
      
    })
    });
  }

  private rootRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }


}

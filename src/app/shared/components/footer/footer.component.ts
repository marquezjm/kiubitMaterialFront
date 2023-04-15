import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { FooterService } from 'src/app/services/footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @ViewChild('footer') footer!:ElementRef
  mostrar:boolean=true

  urls:string[]=['#/public/login','#/public/registrar']
  constructor(private route: Router,private activatedRoute:ActivatedRoute,private service:FooterService,private cd:ChangeDetectorRef) {}
  
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

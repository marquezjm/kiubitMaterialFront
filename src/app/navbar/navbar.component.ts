import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  scroll:number=0
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event:any) {
    console.log(document.documentElement.scrollTop);
    this.scroll=document.documentElement.scrollTop
  }

  constructor() { }

  ngOnInit(): void {
  }

}

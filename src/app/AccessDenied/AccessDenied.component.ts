import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-AccessDenied',
  templateUrl: './AccessDenied.component.html',
  styleUrls: ['./AccessDenied.component.css'],  encapsulation: ViewEncapsulation.None,
})
export class AccessDeniedComponent implements OnInit {
check:boolean = true;
  constructor() { }

  ngOnInit() {

  }
  refresh(): void {
    if(this.check==true){  location.reload();
      this.check=false;
     }
}

}

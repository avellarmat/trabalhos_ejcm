import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EJCM Kingdom';

  ngOnInit(){
    console.log(this.title);
    console.log("abcd");
  }
}

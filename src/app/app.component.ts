import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BigProject-ui';

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
    this.appService.getLogisticCompanies().subscribe(response => {
      console.log(response);
    });
  }

}

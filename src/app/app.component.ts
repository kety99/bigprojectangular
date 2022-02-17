import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";
import {LogisticCompany} from "./model/logistic-company";
import {Employee} from "./model/employee";

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
    let logicompany: LogisticCompany = new LogisticCompany()
    logicompany.name = 'Jessica INC.';
    this.appService.createLogisticCompany(logicompany).subscribe(res =>{
      console.log(res);
    });
    this.appService.getLogisticCompanies().subscribe(response => {
      console.log(response);
    });
    let employee: Employee = new Employee();
    employee.name = 'Monica';
    this.appService.getEmployee().subscribe(res =>{
      console.log(res);
    });
    this.appService.createEmployee(employee).subscribe( res => {
      console.log(res);
    });
  }

}

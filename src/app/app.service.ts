import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LogisticCompany} from "./model/logistic-company";
import {Observable} from "rxjs";
import {Employee} from "./model/employee";

@Injectable()
export class AppService {
  constructor(private httpClient: HttpClient) {
  }

  public getLogisticCompanies(): Observable<Array<LogisticCompany>> {
    let url = '/api/logisticcompany';
    return this.httpClient.get<Array<LogisticCompany>>(url);
  }

  public createLogisticCompany(logisticCompany: LogisticCompany): Observable<LogisticCompany> {
    let url = '/api/logisticcompanies';
    return this.httpClient.post<LogisticCompany>(url,logisticCompany);
  }

  public getEmployee(): Observable<Array<Employee>> {
    let url = '/api/employee';
    return this.httpClient.get<Array<Employee>>(url);
  }

  public createEmployee(employee: Employee): Observable<Employee> {
    let url = '/api/employee';
    return this.httpClient.post<Employee>(url, employee);
  }
}

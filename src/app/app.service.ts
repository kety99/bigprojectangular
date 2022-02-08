import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {LogisticCompany} from "./model/logistic-company";
import {Observable} from "rxjs";

@Injectable()
export class AppService {
  constructor(private httpClient: HttpClient) {
  }

  public getLogisticCompanies(): Observable<Array<LogisticCompany>> {
    let url = '/api/logisticcompany';
    return this.httpClient.get<Array<LogisticCompany>>(url);
  }
}

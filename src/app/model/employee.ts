import {BaseEntity} from "./base-entity";
import {LogisticCompany} from "./logistic-company";
import {Package} from "./package";


export class Employee extends BaseEntity {
  public name: string | undefined;
  public salary: number | undefined;
  public logistic_company: LogisticCompany | undefined;
  public packages: Array<Package> | undefined;

  constructor() {
    super();
  }

}

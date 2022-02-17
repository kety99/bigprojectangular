import {BaseEntity} from "./base-entity";
import {LogisticCompany} from "./logistic-company";
import {Package} from "./package";


export class Employee extends BaseEntity{
  private _name: string | undefined;
  private _salary: number | undefined;
  private _logistic_company: LogisticCompany | undefined;
  private _packages: Array<Package> | undefined;

  get salary(): number | undefined {
    return this._salary;
  }

  set salary(value: number | undefined) {
    this._salary = value;
  }

  get logistic_company(): LogisticCompany | undefined {
    return this._logistic_company;
  }

  set logistic_company(value: LogisticCompany | undefined) {
    this._logistic_company = value;
  }

  get packages(): Array<Package> | undefined {
    return this._packages;
  }

  set packages(value: Array<Package> | undefined) {
    this._packages = value;
  }

  constructor() {
    super();
      }

  get name(): string {
    return <string>this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

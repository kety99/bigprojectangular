import {BaseEntity} from "./base-entity";
import {LogisticCompany} from "./logistic-company";

export class Office extends BaseEntity{
  private _address: string | undefined;
  private _logistic_company: LogisticCompany | undefined;


  get logistic_company(): LogisticCompany | undefined {
    return this._logistic_company;
  }

  set logistic_company(value: LogisticCompany | undefined) {
    this._logistic_company = value;
  }

  constructor() {
    super();
  }

  get address(): string {
    return <string>this._address;
  }

  set address(value: string) {
    this._address = value;
  }
}

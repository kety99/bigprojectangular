import {BaseEntity} from "./base-entity";
import {Office} from "./office";
import {Employee} from "./employee";

export class LogisticCompany extends BaseEntity{
  private _name: string | undefined;
  private _office: Office | undefined;
  private _employees: Array<Employee> | undefined;


  get employees(): Array<Employee> | undefined {
    return this._employees;
  }

  set employees(value: Array<Employee> | undefined) {
    this._employees = value;
  }

  get office(): Office | undefined {
    return this._office;
  }

  set office(value: Office | undefined) {
    this._office = value;
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

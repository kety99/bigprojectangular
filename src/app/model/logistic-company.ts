import {BaseEntity} from "./base-entity";

export class LogisticCompany extends BaseEntity{
  private _name: string;
  //employees: Array<Employee>;


  constructor(id: number, name: string) {
    super(id);
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
}

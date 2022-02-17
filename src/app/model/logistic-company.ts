import {BaseEntity} from "./base-entity";
import {Office} from "./office";
import {Employee} from "./employee";

export class LogisticCompany extends BaseEntity {
  public name: string | undefined;
  public office: Office | undefined;
  public employees: Array<Employee> | undefined;

  constructor() {
    super();
  }
}

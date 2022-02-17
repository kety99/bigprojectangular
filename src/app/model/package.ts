import {BaseEntity} from "./base-entity";
import {Client} from "./client";
import {Employee} from "./employee";

export class Package extends BaseEntity{

  private _addressS: string | undefined;
  private _addressD: string | undefined;
  private _price: number | undefined;
  private _weight: number | undefined;
  private _client: Client | undefined;
  private _employee: Employee | undefined
  private _paid : boolean | undefined;


  get paid(): boolean | undefined {
    return this._paid;
  }

  set paid(value: boolean | undefined) {
    this._paid = value;
  }

  constructor() {
    super();
  }

  get addressS(): string {
    return <string>this._addressS;
  }

  set addressS(value: string) {
    this._addressS = value;
  }

  get addressD(): string {
    return <string>this._addressD;
  }

  set addressD(value: string) {
    this._addressD = value;
  }

  get price(): number {
    return <number>this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get weight(): number {
    return <number>this._weight;
  }

  set weight(value: number) {
    this._weight = value;
  }

  get client(): Client {
    return <Client>this._client;
  }

  set client(value: Client) {
    this._client = value;
  }
  get employee(): Employee {
    return <Employee>this._employee;
  }

  set employee(value: Employee) {
    this._employee = value;
  }
}

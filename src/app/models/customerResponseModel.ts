import { Customer } from "./customer";
import { ResponsModel } from "./responseModel";

export interface CustomerResponseModel extends ResponsModel{
    data:Customer[]
}
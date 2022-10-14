import { Rental } from "./rental";
import { ResponsModel } from "./responseModel";

export interface RentalResponseModel extends ResponsModel{
    data:Rental[]
}
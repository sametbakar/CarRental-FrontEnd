import { Car } from "./car";
import { ResponsModel } from "./responseModel";

export interface CarResponseModel extends ResponsModel{
    data:Car[]
}
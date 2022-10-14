import { Color } from "./color";
import { ResponsModel } from "./responseModel";

export interface ColorResponseModel extends ResponsModel{
    data:Color[]
}
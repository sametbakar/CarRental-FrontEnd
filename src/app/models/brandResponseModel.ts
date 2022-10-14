import { Brand } from "./brand";
import { ResponsModel } from "./responseModel";

export interface BrandResponseModel extends ResponsModel{
    data:Brand[]
}
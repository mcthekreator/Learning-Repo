import { State } from "@ngxs/store";
import { AnimalGet } from "../model/AnimalGet.model";

export interface ZooStateModel{
    GetAnimal: AnimalGet[]
}

@State({
    name: "Zoo"
})


export class ZooState{
    animals: AnimalGet[] = [];
    loading: boolean = false;
    error: string = "";
    filter: string = "";
    page: number = 1;
    pageSize: number = 10;
    sortOrder: string = "asc";
    sortField: string = "id";
    totalPages: number = 0;
    totalItems: number = 0;
}


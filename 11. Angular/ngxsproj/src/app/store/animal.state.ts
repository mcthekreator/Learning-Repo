import { State } from "@ngxs/store";
import { AnimalAdd, AnimalGet } from "../model/AnimalGet.model";
import { Injectable } from "@angular/core";

export interface ZooStateModel{
    GetAnimal: AnimalGet[]
    AddAnimal: AnimalAdd[]
}

@State<ZooStateModel>({
    name: "Zoo",
    defaults: {
        GetAnimal: [],
        AddAnimal: []
    }
})


@Injectable()
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


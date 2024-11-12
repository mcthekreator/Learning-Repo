import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AnimalAdd, AnimalGet } from "../model/AnimalGet.model";
import { Injectable } from "@angular/core";
import { GetAnimal } from "./animal.actions";

export interface ZooStateModel {
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

export class ZooState {
 @Selector()
 static getAnimals(state: ZooStateModel): AnimalGet[] {
     return state.GetAnimal
 }
 @Action(GetAnimal)
 getAnimalStateAction(ctx:StateContext){

 }
}


import { SWNRDroneActor } from "./drone";

interface DroneActorSheetData extends ActorSheet.Data {
  shipWeapons?: Item[];
  itemTypes: SWNRDroneActor["itemTypes"];
}

export class DroneActorSheet extends ActorSheet<
  ActorSheet.Options,
  DroneActorSheetData
> {
  popUpDialog?: Dialog;
  object: SWNRDroneActor;

  get actor(): SWNRDroneActor {
    if (super.actor.type != "drone") throw Error;
    return super.actor;
  }

  static get defaultOptions(): ActorSheet.Options {
    return mergeObject(super.defaultOptions, {
      classes: ["swnr", "sheet", "actor", "drone"],
      template: "systems/swnr/templates/actors/drone-sheet.html",
      width: 800,
      height: 600,
    });
  }
}

export const sheet = DroneActorSheet;
export const types = ["drone"];

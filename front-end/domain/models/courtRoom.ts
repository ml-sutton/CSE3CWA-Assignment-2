import { GameEvent } from "./gameEvent";
import { Task } from "./task";

export interface CourtRoomModel {
  events: GameEvent[]
  tasks: Task[]
  totalSeconds: number
}

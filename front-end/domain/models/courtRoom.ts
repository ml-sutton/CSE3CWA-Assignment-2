export interface CourtRoomModel {
  id: number
  tasks: CourtRoomTask[]
  events: CourtRoomEvent[]
  time: number
}
export interface CourtRoomTask {
  description: string
}
export interface CourtRoomEvent {
  outcome: string
  timer: number
}

import CourtRoomForm from "./courtRoomForm";
import CourtRoomOutput from "./courtRoomOutput";

export default function CourtRoomLayout() {
  return (
    <section className="w-screen h-screen overflow-hidden flex justify-center items-center py-4 px-8 rounded-xl">
      <div className="bg-red-500 flex gap-4 w-3/4">
        <CourtRoomForm />
        <CourtRoomOutput />
      </div>
    </section>
  )
}

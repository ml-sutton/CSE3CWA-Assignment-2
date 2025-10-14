import CourtRoomForm from "./courtRoomForm";

export default function CourtRoomLayout() {
  return (
    <section className="min-w-screen max-w-screen min-h-screen max-h-screen flex justify-center items-center">
      <div className="w-4/5 px-8 py-4 rounded-xl flex gap-8 bg-blue-300">
        <div className="min-w-4/6">
          <CourtRoomForm />
        </div>
        <div className="min-w-2/6">output code</div>
      </div>
    </section>
  )
}

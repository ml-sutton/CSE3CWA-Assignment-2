import CourtRoomForm from "./courtRoomForm";
import CourtRoomOutput from "./courtRoomOuput";

export default function CourtRoomLayout() {
  return (
    <section className="min-w-screen max-w-screen min-h-screen max-h-screen flex justify-center items-center bg-gradient-to-r from-slate-300 dark:from-slate-900 to-slate-500 dark:to-slate-700 text-[#111] dark:text-[#fefefe]">
      <div className="w-4/5 h-2/3 px-8 py-4 rounded-xl flex gap-8 bg-blue-300/75 drop-shadow-slate-950 dark:drop-shadow-slate-100 drop-shadow-xl">
        <div className="min-w-4/6">
          <CourtRoomForm />
        </div>
        <div className="min-w-2/6">
          <CourtRoomOutput />
        </div>
      </div>
    </section>
  )
}

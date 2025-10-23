import CourtRoomForm from "./courtRoomForm";

export default async function CourtRoomLayout() {
  return (
    <section className="min-w-screen max-w-screen min-h-screen max-h-[200vh] py-4 flex justify-center items-center bg-gradient-to-r from-slate-300 dark:from-slate-900 to-slate-500 dark:to-slate-700 text-[#111] dark:text-[#fefefe]">
      <CourtRoomForm />
    </section>
  )
}

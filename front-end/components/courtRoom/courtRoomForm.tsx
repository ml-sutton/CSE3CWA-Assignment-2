export default function CourtRoomForm() {
  return (
    <div className="w-full">
      <div className="">
        <h1>Court Room generator</h1>
      </div>
      <form action="">
        <div className="flex gap-4">
          <label htmlFor="">minutes</label>
          <input type="text" />
          <label htmlFor="">seconds</label>
          <input type="text" />
        </div>
        <label htmlFor="">Initial task</label>
        <input type="text" />
      </form>
    </div>
  )
}

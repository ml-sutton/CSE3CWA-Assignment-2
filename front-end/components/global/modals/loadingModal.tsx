export const LoadingModal: React.FC = () => {
  return (
    <div className="h-screen w-screen backdrop-blur-md absolute left-0 top-0 z-50">
      <div className="w-full h-full backdrop-blur-md flex justify-center items-center">
        <div className="flex justify-center flex-col items-center bg-slate-100 dark:bg-slate-800 text-[#111] dark:text-[#fefefe] border-2 rounded-xl py-8 px-32">
          <h1 className="text-4xl py-8">Loading</h1>

          <div className="w-16 h-16 border-4 border-[#e2231b] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-xl py-8">loading...</p>
        </div>
      </div>
    </div>
  )
}

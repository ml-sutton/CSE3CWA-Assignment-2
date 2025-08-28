"use client"


export const Footer: React.FC = () => {

  const redirectFunction = (_: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    _.preventDefault();
    if (typeof window !== "undefined") {
      window.location.href = "https://github.com/ml-sutton";
    }
  }
  return (
    <footer>
      <div className={`flex justify-center py-8 text-center text-2xl font-bold italic bg-[#e2231b] dark:bg-[#242424] text-white border-t-2 border-[#242424] dark:border-[#e2231b]`}>
        <p>copyright &copy;, <span onClick={redirectFunction} className="cursor-pointer">Madison Lilith Sutton</span>, 21985164<br />August, 2025<br /><sub className="text-transparent"></sub></p>
      </div>
    </footer>
  )
}

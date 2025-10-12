import Link from "next/link"

export const Footer: React.FC = async () => {
  return (
    <footer>
      <div className={`flex justify-center py-8 text-center text-2xl font-bold italic bg-[#e2231b] dark:bg-[#242424] text-white border-t-2 border-[#242424] dark:border-[#e2231b]`}>
        <p>copyright &copy;, <Link href={"https://github.com/ml-sutton"} className="cursor-pointer">Madison Lilith Sutton</Link>, 21985164<br />August, 2025<br /><sub className="text-transparent"></sub></p>
      </div>
    </footer>
  )
}

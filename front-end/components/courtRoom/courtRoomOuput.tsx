import { GenerateGameOutput } from "../../utils/courtRoom/generation"
export default async function CourtRoomOutput() {
  const data = GenerateGameOutput(
    [{ tabId: 1, tabName: "Task 1", tabBody: "Generate me a Next.js page that shows card components for a product class", isEvent: false, edited: false },
    { tabId: 2, tabName: "Task 2", tabBody: "Create a secure login form with proper input validation", isEvent: false, edited: false },
    { tabId: 3, tabName: "Task 3", tabBody: "Implement a product search API endpoint with filtering", isEvent: false, edited: false }], [{ from: 'boss', text: 'Are you done with sprint 1?', isRevision: true, court: 'Court for boss complaint' },
    { from: 'family', text: 'Can you pick up the kids after work?', isRevision: false },
    { from: 'agile', text: 'Fix change Title colour to Red', isRevision: false, repeat: 'Urgent fix change Title colour to Red', court: 'Court: Disability Act' },

    { from: 'agile', text: 'Fix alt in img1', isRevision: false, repeat: 'Urgent fix alt in img1', court: 'Court: Disability Act' },
    { from: 'agile', text: 'Fix input validation', isRevision: false, repeat: 'Urgent fix input validation', court: 'Court: Laws of Tort' },
    { from: 'system', text: 'Fix User login', isRevision: false, court: 'Bankruptcy — no one can use your app' },
    { from: 'system', text: 'Fix Secure Database', isRevision: false, court: 'Hacked — Laws of Tort' }
  ]
  )
  console.log(data)
  return (
    <div className="">
      <div className="flex w-full">
        <button className="w-1/2 border-2 rounded-tl-xl">Compile</button>
        <button className="w-1/2 border-2 rounded-tr-xl" >Copy to clipboard</button>
      </div>
      <div className="bg-slate-100">
        <code className="overflow-y-scroll">
          {data}
        </code>
      </div>
    </div>
  )
}

import { Prisma } from "./_lib/Prisma"
export default async function Index() {
  const isAlive = await Prisma.user.count();
  return (
    <div>
      this works
      {isAlive}
    </div>
  )
}

import { auth } from '@/services/auth'

export default async function Home() {
  const session = await auth()

  return (
    <main>
      <p className="text-black">email: {session?.user?.email}</p>
    </main>
  )
}

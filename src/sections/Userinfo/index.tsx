import { useSession } from "next-auth/react"

export default function Userinfo() {
  const {data: session} = useSession()

  return (
    <>
      <div className='text-base font-medium leading-none'>
        {session?.user?.name}
      </div>
      <div className='text-sm font-medium leading-none'>
        {session?.user?.email}
      </div>
    </>
  )
}
import { Disclosure } from "@headlessui/react"
import { signOut } from "next-auth/react"

export default function Signoutbutton() {
  return (
    <Disclosure.Button
      className='block px-3 py-2 rounded-md text-left font-medium hover:text-lg'
    >
      <button onClick={async () => {await signOut()}}>SignOut</button>
    </Disclosure.Button>
  )
}
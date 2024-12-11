import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='bg-[#333] flex items-center justify-center'>
      <SignUp />
    </div>
  )
  
}
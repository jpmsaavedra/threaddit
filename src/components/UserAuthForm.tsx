'use client'

import { FC, useState } from 'react'
import { Button } from './ui/Button'
import { signIn } from 'next-auth/react'
import { Icons } from './Icons'
import { useToast } from '@/hooks/use-toast'

interface UserAuthFormProps {}

const UserAuthForm: FC<UserAuthFormProps> = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const loginwithGoogle = async () => {
    setIsLoading(true)

    try {
      throw new Error()
      await signIn('google')
    } catch (error) {
      toast({
        title: 'There was a problem',
        description: 'There was an error logging in with Google',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='flex justify-center'>
      <Button
        onClick={loginwithGoogle}
        isLoading={isLoading}
        size='sm'
        className='w-full'>
        {isLoading ? null : <Icons.google className='h-4 w-4 mr-2' />}
        Google
      </Button>
    </div>
  )
}

export default UserAuthForm

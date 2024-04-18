'use client'

import EmailGreenIcon from '@/components/icons/EmailGreenIcon'
import ConfirmaPasswordGreenIcon from '@/components/icons/PasswordChecked'
import PasswordGreenIcon from '@/components/icons/PasswordGreenIcon'
import UserIcon from '@/components/icons/UserIcon'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import CadastroRadioGroup from './cadastro-radio-group'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { registerSchema } from '../schema'

const CadastroForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(form.getValues())
  }

  const [showAdditionalInput, setShowAdditionalInput] = useState(false)

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
  })

  return (
    <>
      <CadastroRadioGroup
        onValueChange={(value) => {
          setShowAdditionalInput(value === 'monitor')
        }}
      />
      <form onSubmit={handleSubmit} id="cadastro" className="grid w-full gap-4">
        <div className="flex flex-row items-center justify-center gap-2">
          <UserIcon />
          <Input
            id="usuario"
            className="bg-cinza text-black placeholder:text-zinc-500 hover:bg-white focus-visible:bg-white focus-visible:ring-0"
            placeholder="Usuário"
            required
            type="text"
            autoComplete="off"
            {...form.register('credentials.usuario')}
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <EmailGreenIcon />
          <Input
            className="bg-cinza text-black placeholder:text-zinc-500 hover:bg-white focus-visible:bg-white focus-visible:ring-0"
            id="email"
            placeholder="Email"
            required
            type="email"
            autoComplete="off"
            {...form.register('credentials.email')}
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <PasswordGreenIcon />
          <Input
            className="bg-cinza text-black placeholder:text-zinc-500 hover:bg-white focus-visible:bg-white focus-visible:ring-0"
            id="senha"
            placeholder="Senha"
            required
            type="senha"
            autoComplete="off"
            {...form.register('credentials.senha')}
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <ConfirmaPasswordGreenIcon />
          <Input
            className="bg-cinza text-black placeholder:text-zinc-500 hover:bg-white focus-visible:bg-white focus-visible:ring-0"
            id="confirmarSenha"
            placeholder="Confirmar Senha"
            required
            type="confirmarSenha"
            autoComplete="off"
            {...form.register('credentials.confirmarSenha')}
          />
        </div>
        <div
          className={`flex-row items-center justify-center gap-2 ${showAdditionalInput ? 'flex' : 'hidden'}`}
        >
          <ConfirmaPasswordGreenIcon />
          <Input
            className="bg-cinza text-black placeholder:text-zinc-500 hover:bg-white focus-visible:bg-white focus-visible:ring-0"
            id="token"
            placeholder="Token"
            type="token"
            autoComplete="off"
            {...form.register('credentials.token')}
          />
        </div>
      </form>
      <div className="mx-16 flex flex-col items-center">
        <Button
          form="cadastro"
          className="my-4 w-full bg-emerald-600 font-light text-emerald-50 shadow-[6.0px_10.0px_10.0px_rgba(0,0,0,0.38)] transition-colors hover:bg-emerald-500 hover:shadow-[3.0px_6.0px_6.0px_rgba(0,0,0,0.38)]"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? 'Registrando...' : 'Registrar'}
        </Button>
        <p className="text-xs">
          Já possui conta?{' '}
          <Link href={'/auth'} className="underline">
            Entre
          </Link>
        </p>
      </div>
    </>
  )
}

export default CadastroForm

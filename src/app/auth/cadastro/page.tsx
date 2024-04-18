'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import LayoutAuthPage from '../_components/layout-page'
import CadastroBanner from './_components/cadastro-banner'
import CadastroRadioGroup from './_components/cadastro-radio-group'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import UserIcon from '@/components/icons/UserIcon'
import EmailGreenIcon from '@/components/icons/EmailGreenIcon'
import PasswordGreenIcon from '@/components/icons/PasswordGreenIcon'
import ConfirmaPasswordGreenIcon from '@/components/icons/PasswordChecked'
import Link from 'next/link'

export default function Cadastro() {
  const handleSubmit = () => {}
  const form = useForm()

  return (
    <LayoutAuthPage className="bg-[#0D192B]">
      <LayoutAuthPage.Secondary>
        <CadastroBanner />
        <img
          alt="alunos lendo"
          src="/images/alunos-lendo.png"
          width={638}
          height={576}
          sizes="200%"
        />
      </LayoutAuthPage.Secondary>
      <LayoutAuthPage.Primary>
        <Card className="mx-auto grid rounded-2xl bg-[#F9F9F9] px-28 py-6">
          <CardHeader className="grid w-full gap-2 py-6 text-center ">
            <h1 className="my-2 text-3xl font-bold text-verdee">REGISTRAR</h1>
          </CardHeader>
          <CardContent className="flex flex-col gap-8">
            <CadastroRadioGroup />
            <form
              onSubmit={handleSubmit}
              id="cadastro"
              className="grid w-full gap-4"
            >
              <div className="flex flex-row items-center justify-center gap-2">
                <UserIcon />
                <Input
                  id="usuario"
                  className="bg-cinza text-black placeholder:text-zinc-500 hover:bg-white focus-visible:bg-white focus-visible:ring-0"
                  placeholder="Usuário"
                  required
                  type="text"
                  autoComplete="off"
                  {...form.register('usuario')}
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
                  {...form.register('email')}
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
                  {...form.register('senha')}
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
                  {...form.register('confirmarSenha')}
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
          </CardContent>
        </Card>
      </LayoutAuthPage.Primary>
    </LayoutAuthPage>
  )
}

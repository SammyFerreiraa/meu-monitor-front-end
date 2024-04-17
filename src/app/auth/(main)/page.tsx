import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import EmailIcon from '@/components/icons/EmailIcon'
import PasswordIcon from '@/components/icons/PassswordIcon'

export default function Auth() {
  return (
    <div className="h-full w-full bg-[#EBF5EE] lg:grid lg:grid-cols-2">
      <div className="hidden h-full w-full lg:block"></div>
      <div className="flex items-center justify-center py-12 text-white">
        <div className="bg-verdee mx-auto grid w-[375px] rounded-2xl px-8 py-6">
          <div className="grid w-full gap-2 py-6 text-center">
            <h1 className="my-2 text-3xl font-bold">LOGIN</h1>
          </div>
          <div className="grid w-full gap-8">
            <div className="flex flex-row items-center justify-center gap-2">
              <EmailIcon />
              <Input
                id="email"
                className="bg-cinza text-black"
                placeholder="Email"
                required
                type="email"
                autoComplete="off"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex flex-row items-center justify-center gap-2">
                <PasswordIcon />
                <Input
                  className="bg-cinza text-black"
                  id="password"
                  placeholder="Senha"
                  required
                  type="password"
                  autoComplete="off"
                />
              </div>
              <Link className="ml-auto inline-block text-xs underline" href="#">
                Esqueceu sua senha?
              </Link>
            </div>
          </div>
          <div className="mx-16">
            <Button
              className="my-4 w-full bg-emerald-600 font-light text-emerald-50 shadow-[6.0px_10.0px_10.0px_rgba(0,0,0,0.38)] transition-colors hover:bg-emerald-500 hover:shadow-[3.0px_6.0px_6.0px_rgba(0,0,0,0.38)]"
              type="submit"
            >
              Login
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            <div className="flex flex-col items-center">
              <div className="flex w-full items-center gap-2">
                <div className="h-[1px] w-full bg-green-50"></div>
                <p className="w-full  text-xs font-light">Crie uma conta</p>
                <div className="h-[1px] w-full bg-green-50"></div>
              </div>

              <Link
                href={'/auth/cadastro'}
                className="mb-4 mt-7 flex w-full items-center justify-center px-16"
              >
                <Button className="w-full bg-slate-900 text-sm font-light text-emerald-50 shadow-[6.0px_10.0px_10.0px_rgba(0,0,0,0.38)]  transition-colors hover:bg-emerald-500 hover:shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                  Registrar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

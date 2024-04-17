import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import EmailIcon from '@/components/icons/EmailIcon'
import PasswordIcon from '@/components/icons/PassswordIcon'
import MonitorIcon from '@/components/icons/MonitorIcon'
import StudentIcon from '@/components/icons/StudentIcon'
import TeacherIcon from '@/components/icons/TeacherIcon'

export default function Auth() {
  return (
    <div className="h-full w-full bg-[#EBF5EE] lg:grid lg:grid-cols-2">
      <div className="hidden h-full w-full flex-col items-center justify-start px-20 lg:flex">
        <div className="flex w-full items-center justify-start py-4">
          <img
            src="/images/logo-login-page.png"
            alt="logo"
            width={78}
            height={78}
            sizes="200%"
          />
          <h1
            className={`font-coolvetica text-verdee pl-6 text-[34px] font-semibold`}
          >
            MeuMonitor
          </h1>
        </div>
        <aside className="font-coolvetica relative rounded-2xl bg-neutral-300 pb-12 pl-10 pt-16 text-xl font-normal leading-5 tracking-wide text-teal-900 ">
          <div className="mb-7 max-w-[312px]">
            <p className="w-full">
              Nós somos o MeuMonitor, mais do que uma simples ferramenta
              digital, somos uma comunidade dedicada a transformar a experiência
              educacional. Promovendo a integração eficaz entre monitores e
              alunos em uma jornada de aprendizado enriquecedora.
            </p>
          </div>
          <div className="mb-12 mr-2 max-w-[540px]">
            <p className="w-full">
              Aproveite ao máximo sua experiência no MeuMonitor e embarque na
              jornada que o levará ao sucesso acadêmico. Explore e alcance seus
              objetivos. A educação é uma jornada, e estamos aqui para apoiá-lo
              a cada passo do caminho. Seja parte da mudança!
            </p>
          </div>
          <div className="flex flex-row items-center justify-between pr-7">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-teal-900">
              <MonitorIcon />
            </div>
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-teal-900">
              <StudentIcon />
            </div>
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-teal-900">
              <TeacherIcon />
            </div>
          </div>
          <img
            className="absolute -right-32 -top-4"
            alt="alunos lendo"
            src="/images/alunos-lendo.png"
            width={319}
            height={288}
            sizes="200%"
          />
        </aside>
      </div>
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
                className="bg-cinza text-black placeholder:text-zinc-500 hover:bg-white focus-visible:bg-white focus-visible:ring-0"
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
                  className="bg-cinza text-black placeholder:text-zinc-500 hover:bg-white focus-visible:bg-white focus-visible:ring-0"
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

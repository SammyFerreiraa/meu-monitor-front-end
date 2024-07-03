import { PlusIcon } from '@radix-ui/react-icons'
import Header from './_components/header'

export default async function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-14 py-14">
        <section className="flex h-full w-full max-w-screen-xl flex-col items-center justify-center gap-8 rounded-sm bg-[#031229] p-5">
          <div className="grid w-full grid-cols-5 gap-8">
            <p className="rounded-md bg-[#0A8967] px-6 py-6 text-center text-2xl font-bold text-white">
              Segunda-Feira
            </p>
            <p className="rounded-md bg-[#0A8967] px-6 py-6 text-center text-2xl font-bold text-white">
              Terça-Feira
            </p>
            <p className="rounded-md bg-[#0A8967] px-6 py-6 text-center text-2xl font-bold text-white">
              Quarta-Feira
            </p>
            <p className="rounded-md bg-[#0A8967] px-6 py-6 text-center text-2xl font-bold text-white">
              Quinta-Feira
            </p>
            <p className="rounded-md bg-[#0A8967] px-6 py-6 text-center text-2xl font-bold text-white">
              Sexta-Feira
            </p>
          </div>
          {/* Inicio Tabelas  */}
          <div className="grid h-full w-full grid-cols-5 gap-8 overflow-y-auto">
            <div className="flex h-1 flex-col gap-4 pb-4">
              <div className="rounded-md bg-[#DCDCDC] p-3 hover:bg-[#C0C0C0]">
                <p className="text-lg font-bold">Matemática discreta</p>
                <p className="">12:30h - 13:30h</p>
                <div className="flex flex-row items-center justify-between">
                  <p className="">Bloco 2 Sala 4</p>
                  <PlusIcon className="size-6 cursor-pointer rounded-full border-2 border-[#0A8967] text-[#0A8967] hover:border-black hover:bg-[#07F9A2] hover:text-black" />
                </div>
              </div>
              <div className="rounded-md bg-[#DCDCDC] p-3 hover:bg-[#C0C0C0]">
                <p className="text-lg font-bold">Matemática discreta</p>
                <p className="">12:30h - 13:30h</p>
                <div className="flex flex-row items-center justify-between">
                  <p className="">Bloco 2 Sala 4</p>
                  <PlusIcon className="size-6 cursor-pointer rounded-full border-2 border-[#0A8967] text-[#0A8967] hover:border-black hover:bg-[#07F9A2] hover:text-black" />
                </div>
              </div>
              <div className="rounded-md bg-[#DCDCDC] p-3 hover:bg-[#C0C0C0]">
                <p className="text-lg font-bold">Matemática discreta</p>
                <p className="">12:30h - 13:30h</p>
                <div className="flex flex-row items-center justify-between">
                  <p className="">Bloco 2 Sala 4</p>
                  <PlusIcon className="size-6 cursor-pointer rounded-full border-2 border-[#0A8967] text-[#0A8967] hover:border-black hover:bg-[#07F9A2] hover:text-black" />
                </div>
              </div>
            </div>
            <div className="flex h-1 flex-col gap-4 pb-4">
              <div className="rounded-md bg-[#DCDCDC] p-3 hover:bg-[#C0C0C0]">
                <p className="text-lg font-bold">Matemática discreta</p>
                <p className="">12:30h - 13:30h</p>
                <div className="flex flex-row items-center justify-between">
                  <p className="">Bloco 2 Sala 4</p>
                  <PlusIcon className="size-6 cursor-pointer rounded-full border-2 border-[#0A8967] text-[#0A8967] hover:border-black hover:bg-[#07F9A2] hover:text-black" />
                </div>
              </div>
              <div className="rounded-md bg-[#DCDCDC] p-3 hover:bg-[#C0C0C0]">
                <p className="text-lg font-bold">Matemática discreta</p>
                <p className="">12:30h - 13:30h</p>
                <div className="flex flex-row items-center justify-between">
                  <p className="">Bloco 2 Sala 4</p>
                  <PlusIcon className="size-6 cursor-pointer rounded-full border-2 border-[#0A8967] text-[#0A8967] hover:border-black hover:bg-[#07F9A2] hover:text-black" />
                </div>
              </div>
              <div className="rounded-md bg-[#DCDCDC] p-3 hover:bg-[#C0C0C0]">
                <p className="text-lg font-bold">Matemática discreta</p>
                <p className="">12:30h - 13:30h</p>
                <div className="flex flex-row items-center justify-between">
                  <p className="">Bloco 2 Sala 4</p>
                  <PlusIcon className="size-6 cursor-pointer rounded-full border-2 border-[#0A8967] text-[#0A8967] hover:border-black hover:bg-[#07F9A2] hover:text-black" />
                </div>
              </div>
              <div className="rounded-md bg-[#DCDCDC] p-3 hover:bg-[#C0C0C0]">
                <p className="text-lg font-bold">Matemática discreta</p>
                <p className="">12:30h - 13:30h</p>
                <div className="flex flex-row items-center justify-between">
                  <p className="">Bloco 2 Sala 4</p>
                  <PlusIcon className="size-6 cursor-pointer rounded-full border-2 border-[#0A8967] text-[#0A8967] hover:border-black hover:bg-[#07F9A2] hover:text-black" />
                </div>
              </div>
              <div className="rounded-md bg-[#DCDCDC] p-3 hover:bg-[#C0C0C0]">
                <p className="text-lg font-bold">Matemática discreta</p>
                <p className="">12:30h - 13:30h</p>
                <div className="flex flex-row items-center justify-between">
                  <p className="">Bloco 2 Sala 4</p>
                  <PlusIcon className="size-6 cursor-pointer rounded-full border-2 border-[#0A8967] text-[#0A8967] hover:border-black hover:bg-[#07F9A2] hover:text-black" />
                </div>
              </div>
              <div className="rounded-md bg-[#DCDCDC] p-3 hover:bg-[#C0C0C0]">
                <p className="text-lg font-bold">Matemática discreta</p>
                <p className="">12:30h - 13:30h</p>
                <div className="flex flex-row items-center justify-between">
                  <p className="">Bloco 2 Sala 4</p>
                  <PlusIcon className="size-6 cursor-pointer rounded-full border-2 border-[#0A8967] text-[#0A8967] hover:border-black hover:bg-[#07F9A2] hover:text-black" />
                </div>
              </div>
            </div>
            <div className="flex h-1 flex-col gap-4 pb-4">
              <div className="rounded-md bg-[#DCDCDC] p-3 hover:bg-[#C0C0C0]">
                <p className="text-lg font-bold">Matemática discreta</p>
                <p className="">12:30h - 13:30h</p>
                <div className="flex flex-row items-center justify-between">
                  <p className="">Bloco 2 Sala 4</p>
                  <PlusIcon className="size-6 cursor-pointer rounded-full border-2 border-[#0A8967] text-[#0A8967] hover:border-black hover:bg-[#07F9A2] hover:text-black" />
                </div>
              </div>
              <div className="rounded-md bg-[#DCDCDC] p-3 hover:bg-[#C0C0C0]">
                <p className="text-lg font-bold">Matemática discreta</p>
                <p className="">12:30h - 13:30h</p>
                <div className="flex flex-row items-center justify-between">
                  <p className="">Bloco 2 Sala 4</p>
                  <PlusIcon className="size-6 cursor-pointer rounded-full border-2 border-[#0A8967] text-[#0A8967] hover:border-black hover:bg-[#07F9A2] hover:text-black" />
                </div>
              </div>
            </div>
            <div className="flex h-1 flex-col gap-4 pb-4">
              <div className="rounded-md bg-[#DCDCDC] p-3 hover:bg-[#C0C0C0]">
                <p className="text-lg font-bold">Matemática discreta</p>
                <p className="">12:30h - 13:30h</p>
                <div className="flex flex-row items-center justify-between">
                  <p className="">Bloco 2 Sala 4</p>
                  <PlusIcon className="size-6 cursor-pointer rounded-full border-2 border-[#0A8967] text-[#0A8967] hover:border-black hover:bg-[#07F9A2] hover:text-black" />
                </div>
              </div>
              <div className="rounded-md bg-[#DCDCDC] p-3 hover:bg-[#C0C0C0]">
                <p className="text-lg font-bold">Matemática discreta</p>
                <p className="">12:30h - 13:30h</p>
                <div className="flex flex-row items-center justify-between">
                  <p className="">Bloco 2 Sala 4</p>
                  <PlusIcon className="size-6 cursor-pointer rounded-full border-2 border-[#0A8967] text-[#0A8967] hover:border-black hover:bg-[#07F9A2] hover:text-black" />
                </div>
              </div>
            </div>
            <div className="flex h-1 flex-col gap-4 pb-4">
              <div className="rounded-md bg-[#DCDCDC] p-3 hover:bg-[#C0C0C0]">
                <p className="text-lg font-bold">Matemática discreta</p>
                <p className="">12:30h - 13:30h</p>
                <div className="flex flex-row items-center justify-between">
                  <p className="">Bloco 2 Sala 4</p>
                  <PlusIcon className="size-6 cursor-pointer rounded-full border-2 border-[#0A8967] text-[#0A8967] hover:border-black hover:bg-[#07F9A2] hover:text-black" />
                </div>
              </div>
              <div className="rounded-md bg-[#DCDCDC] p-3 hover:bg-[#C0C0C0]">
                <p className="text-lg font-bold">Matemática discreta</p>
                <p className="">12:30h - 13:30h</p>
                <div className="flex flex-row items-center justify-between">
                  <p className="">Bloco 2 Sala 4</p>
                  <PlusIcon className="size-6 cursor-pointer rounded-full border-2 border-[#0A8967] text-[#0A8967] hover:border-black hover:bg-[#07F9A2] hover:text-black" />
                </div>
              </div>
              <div className="rounded-md bg-[#DCDCDC] p-3 hover:bg-[#C0C0C0]">
                <p className="text-lg font-bold">Matemática discreta</p>
                <p className="">12:30h - 13:30h</p>
                <div className="flex flex-row items-center justify-between">
                  <p className="">Bloco 2 Sala 4</p>
                  <PlusIcon className="size-6 cursor-pointer rounded-full border-2 border-[#0A8967] text-[#0A8967] hover:border-black hover:bg-[#07F9A2] hover:text-black" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

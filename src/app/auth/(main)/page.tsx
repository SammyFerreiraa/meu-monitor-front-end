import LoginBanner from './_components/login-banner'
import LoginAbout from './_components/login-about'
import LoginForm from './_components/login-form'
import LoginFormExtra from './_components/login-form-extra'

export default function Auth() {
  return (
    <div className="h-full w-full bg-[#EBF5EE] lg:grid lg:grid-cols-2">
      <div className="hidden h-full w-full flex-col items-center justify-start px-20 lg:flex">
        <LoginBanner />
        <LoginAbout />
      </div>
      <div className="flex items-center justify-center py-12 text-white">
        <div className="mx-auto grid w-[375px] rounded-2xl bg-verdee px-8 py-6">
          <div className="grid w-full gap-2 py-6 text-center">
            <h1 className="my-2 text-3xl font-bold">LOGIN</h1>
          </div>
          <LoginForm />
          <LoginFormExtra />
        </div>
      </div>
    </div>
  )
}

export type userProps = {
  name: string
  email: string
}

declare module 'next-auth' {
  interface Session {
    token: string
    user: userProps
  }
}

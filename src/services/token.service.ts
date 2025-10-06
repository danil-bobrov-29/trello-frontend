import Cookies from 'js-cookie'

export const EnumTokens = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
} as const

export const getAccessToken = (): string | null => {
  const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)

  return accessToken || null
}

export const saveTokenStorage = (accessToken: string) => {
  Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
    domain: 'localhost',
    sameSite: 'strict',
    expires: 1,
  })
}

export const removeAccessToken = () => {
  Cookies.remove(EnumTokens.ACCESS_TOKEN)
}

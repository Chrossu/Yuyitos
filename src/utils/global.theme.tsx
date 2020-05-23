export type GlobalTheme = {
  body: string
  hollowBackground: string
  background: string
  text: string
  toggleBorder: string
  gradient: string
}

export const lightTheme: GlobalTheme = {
  body: '#E2E2E2',
  hollowBackground: '#eff4f7',
  background: '#fff',
  text: '#262629',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
}

export const darkTheme: GlobalTheme = {
  body: '#262629',
  hollowBackground: '#242527',
  background: '#fff',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
}
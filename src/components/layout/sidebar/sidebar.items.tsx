export type SidebarItem = {
  url: string
  label: string
  subItems?: SidebarItem[]
}

export const NAVBAR_ITEMS: SidebarItem[] = [
  {
    url: '/', label: 'Inicio', subItems: [
      // { url: 'statements', label: 'Statements' },
      // { url: 'reports', label: 'Reports' },
    ]
  },
  { url: '/ventas', label: 'Ventas' },
  { url: 'clientes', label: 'Clientes' },
  { url: 'proveedores', label: 'Proveedores' },
  { url: 'estadisticas', label: 'Estadísticas' },
]
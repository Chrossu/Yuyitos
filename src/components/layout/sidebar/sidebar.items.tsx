export type SidebarItem = {
  name: string
  label: string
  subItems?: SidebarItem[]
}

export const NAVBAR_ITEMS: SidebarItem[] = [
  {
    name: 'home', label: 'Inicio', subItems: [
      // { name: 'statements', label: 'Statements' },
      // { name: 'reports', label: 'Reports' },
    ]
  },
  { name: 'sells', label: 'Ventas' },
  { name: 'providers', label: 'Proveedores' },
  { name: 'stats', label: 'Estadísticas' },
]
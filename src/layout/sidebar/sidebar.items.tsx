import React from 'react'
import { ReactComponent as MoneySVG } from 'layout/svg-repo/money.svg'
import { ReactComponent as PersonSVG } from 'layout/svg-repo/person.svg'
import { ReactComponent as FoodSVG } from 'layout/svg-repo/food.svg'

export type SidebarItem = {
  url: string
  label: string
  subItems?: SidebarItem[]
  svg?: any
}

export const NAVBAR_ITEMS: SidebarItem[] = [
  { url: '/', label: 'Ventas', svg: <MoneySVG /> },
  { url: '/clientes', label: 'Clientes', svg: <PersonSVG />},
  { url: '/productos', label: 'Productos', svg: <FoodSVG /> },
]
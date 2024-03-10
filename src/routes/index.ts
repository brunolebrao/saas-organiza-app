import { Icon } from "@radix-ui/react-select";
import {HomeIcon, ChartPieIcon} from '@heroicons/react/20/solid'

export const routes =  [
  {
    title: "Inicio",
    href: "/",
    Icon: HomeIcon,
  },
  {
    title: "Public",
    href: "/public",
    Icon: ChartPieIcon,
  },
  {
    title: "Private",
    href: "/private",
    Icon: ChartPieIcon,
  }
]


export type TypeofRoutes = typeof routes
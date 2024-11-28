import { clsx, type ClassValue } from "clsx"
import { ClockIcon, MessageSquareIcon, ZapIcon } from "lucide-react"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const cards = [
  {
    id:1,
    icon:MessageSquareIcon,
    title:'Hello World',
    description: 'This is a simple card',
  },
  {
    id:2,
    icon:ZapIcon,
    title:'Another Card',
    description: 'This is another card',
  },
  {
    id:3,
    icon:ClockIcon,
    title:'Yet Another Card',
    description: 'This is yet another card',
  },
]
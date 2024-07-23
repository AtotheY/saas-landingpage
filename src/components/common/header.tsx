'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Typography from '@/components/ui/typography'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger
} from '@/components/ui/drawer'
import { MenuIcon, X } from 'lucide-react'

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Header({ className }: SidebarProps) {
  const pathname = usePathname()
  const items = [
    {
      href: 'https://map.sistilli.dev/public/coding/SaaS+Boilerplate',
      title: 'Free Consultation',
      openInNewTab: true
    },
    {
      href: 'mailto:info@vindael.com',
      title: 'Contact Us'
    }
  ]

  const getLogo = () => (
    <Link href="/" className="pointer flex items-center">
      <Typography className="!text-white !text-base font-medium">
        Vindael
      </Typography>
    </Link>
  )

  const getHeaderItems = () => {
    return (
      <>
        {items.map((item) => {
          const selected =
            pathname === item.href ||
            pathname.includes(item.href)
          return (
            <Link
              href={item.href}
              className="pointer block w-fit"
              target={item.openInNewTab ? '_blank' : ''}
              key={item.title}
            >
              <Typography
                variant="p"
                className={cn(selected && 'text-primary')}
              >
                {item.title}
              </Typography>
            </Link>
          )
        })}
      </>
    )
  }

  return (
    <div
      className={cn(
        `flex md:h-12 h-14 items-center justify-between w-full border-b px-4 md:px-8`,
        className
      )}
    >
      <div className="flex items-center">
        {getLogo()}
      </div>
      <div className="hidden md:flex items-center gap-x-4 ml-auto">
        {getHeaderItems()}
      </div>
      <div className="md:hidden flex gap-x-4 items-center ml-auto">
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <MenuIcon />
          </DrawerTrigger>
          <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 w-64 rounded-none">
            <div className="mx-auto w-full p-5">
              <DrawerHeader>
                <DrawerClose asChild>
                  <div className="w-full flex items-end justify-end">
                    <X />
                  </div>
                </DrawerClose>
              </DrawerHeader>
              <div className="p-4 pb-0 space-y-4">
                {getHeaderItems()}
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  )
}

'use client'
import Link from 'next/link'
import Typography from '@/components/ui/typography'

export function Footer() {
  return (
    <footer className="flex h-12 items-center justify-between w-full border-t px-4 md:px-8">
      <div className="flex items-center">
        <Link href="/" className="pointer flex items-center">
          <Typography className="!text-white !text-base font-medium">
            Vindael
          </Typography>
        </Link>
      </div>
      <div className="flex gap-x-4">
        <Link
          href="https://map.sistilli.dev/public/coding/SaaS+Boilerplate"
          target="_blank"
          className="pointer block w-fit"
        >
          <Typography variant="p" className="w-max">
            Free Consultation
          </Typography>
        </Link>
        <Link
          href="/terms-of-service"
          className="pointer block w-fit"
        >
          <Typography variant="p" className="w-max">
            Terms of Service
          </Typography>
        </Link>
        <Link
          href="/privacy-policy"
          className="pointer block w-fit"
        >
          <Typography variant="p">
            Privacy Policy
          </Typography>
        </Link>
      </div>
    </footer>
  )
}

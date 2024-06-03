import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Link from 'next/link'

export default function Home() {
  return (
    <div
      className="flex flex-col h-full md:py-36 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
          Industrial automation made easy.
        </Typography>
        <Link href="https://cloacina.io" target="_blank">
          <Button size="tiny" variant="ghost">
            {`Get Started`}
          </Button>
        </Link>
      </div>
    </div>
  )
}

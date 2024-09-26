"use client"

import { Button } from "../ui/button"
import Modal from "../ui/modal"
import Typography from "../ui/typography"

interface ModalProps {
    title: string
  }

export function AuthForm({ title }: ModalProps) {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      event.stopPropagation()
    }

  return(
    <Modal>
      <div className="bg-[hsl(var(--background))] w-full max-w-[300px] min-w-[250px] mx-auto p-8 px-5 border-2 border-[var(--foreground)]">
        <Typography variant="h3">
          {title}
        </Typography>
        <form className="w-full flex flex-col mt-4" onSubmit={handleSubmit}>
          <label className="block opacity-75">Email</label>
          <input className="text-black w-full mb-4" type="text" />
          <label className="block opacity-75">Password</label>
          <input className="text-black w-full mb-4" type="password" />
          <Button color="ghost" size="tiny" className="mx-auto" onClick={(event) => { event.stopPropagation(); }}>
            <Typography variant="p" className="text-black" >
              Submit
            </Typography>
          </Button>
        </form>
      </div>
    </Modal>
  )
}
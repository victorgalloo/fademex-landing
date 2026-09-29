'use client'

import { useState, type ReactNode } from 'react'

export interface AccordionItem {
  title: string
  meta?: string
  content: ReactNode
}

export default function Accordion({
  items,
  defaultOpen = 0,
}: {
  items: AccordionItem[]
  defaultOpen?: number | null
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen)

  return (
    <div className="border-t border-carbon">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.title} className="border-b border-carbon">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-6 py-5 text-left"
            >
              <span className="flex flex-col gap-1.5">
                {item.meta && <span className="text-label uppercase text-mercury">{item.meta}</span>}
                <span className="text-[20px] md:text-subheading font-normal text-carbon">{item.title}</span>
              </span>
              <span
                className="flex-shrink-0 w-10 h-10 rounded-full border border-carbon bg-white flex items-center justify-center text-carbon text-lg leading-none"
                aria-hidden="true"
              >
                {isOpen ? '−' : '+'}
              </span>
            </button>
            <div
              className={`grid transition-all duration-500 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <div className="pb-6 pr-14 text-sm leading-[1.4] text-carbon/80">{item.content}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

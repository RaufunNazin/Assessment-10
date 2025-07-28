import { Check } from "lucide-react"
import type { Checklist } from "@/types/product"

interface ChecklistSectionProps {
  items: Checklist[]
  title: string
}

export function ChecklistSection({ items, title }: ChecklistSectionProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">{title}</h2>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex items-start gap-3">
            <div className="bg-green-100 rounded-full p-1 mt-0.5">
              <Check className="w-3 h-3 text-green-600" />
            </div>
            <div>
              <p className="text-gray-700">{item.title}</p>
              {item.description && <p className="text-sm text-gray-500 mt-1">{item.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

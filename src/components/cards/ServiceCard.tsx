import Paragraph from "../shared/Paragraph"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

export default function ServiceCard({
  title,
  description,
  icon
}: ServiceCardProps) {
  return (
    <div className="p-5 sm:p-6 lg:p-8 bg-box-bg border rounded-3xl shadow-lg relative overflow-hidden">
      <div className="rounded-xl bg-body p-3 text-heading-1 w-max relative">
        {icon}
      </div>
      <div className="mt-6 space-y-4 relative">
        <h3 className="text-lg md:text-xl font-semibold text-heading-2">{title}</h3>
        <Paragraph>{description}</Paragraph>
      </div>
    </div>
  )
}

import Paragraph from "../shared/Paragraph";

interface AboutCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function AboutCard({ title, description, children }: AboutCardProps) {
  return (
    <div className="border rounded-3xl bg-box-bg p-8 sm:p-6 lg:p-8">
      <div className="my-4 rounded-xl bg-gray dark:bg-gray-950 p-3 text-heading-1 w-max relative">{children}</div>
      <h1 className="text-heading-2 w-max relative md:text-xl font-bold">{title}</h1>
      <Paragraph>{description}</Paragraph>
    </div>
  )
}
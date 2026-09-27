type LinkCardProps = {
  label: string;
  href: string;
};

export default function LinkCard({ label, href }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center justify-center rounded-2xl border border-white/60 bg-white/40 px-5 py-4 text-center font-medium text-[#3a2a1a] shadow-[0_4px_20px_rgba(146,90,40,0.08)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/55 hover:shadow-[0_8px_24px_rgba(146,90,40,0.14)]"
    >
      {label}
    </a>
  );
}

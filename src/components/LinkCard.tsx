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
      className="flex w-full items-center justify-center rounded-xl border border-black/10 bg-white px-4 py-4 text-center font-medium shadow-sm transition-colors hover:bg-black/5 dark:border-white/15 dark:bg-white/5 dark:hover:bg-white/10"
    >
      {label}
    </a>
  );
}

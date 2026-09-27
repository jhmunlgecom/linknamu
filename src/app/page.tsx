import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";

const links = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
  { label: "Blog", href: "https://example.com/" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-sm flex-col items-center gap-8 px-4 py-16">
      <ProfileHeader
        name="김클로"
        bio="세계 최강 바이브코더"
        avatarInitial="김"
      />
      <div className="flex w-full flex-col gap-6">
        {links.map((link) => (
          <LinkCard key={link.label} label={link.label} href={link.href} />
        ))}
      </div>
    </main>
  );
}

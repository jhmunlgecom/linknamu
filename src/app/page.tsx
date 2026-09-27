import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";

const links = [
  { label: "🐙 GitHub", href: "https://github.com/jhmunlgecom" },
  { label: "✍️ 블로그", href: "https://github.com/jhmunlgecom" },
  { label: "📧 이메일", href: "mailto:lge.jh.mun@gmail.com" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-sm flex-col items-center gap-10 px-6 py-20 sm:px-8">
      <ProfileHeader
        name="김개발"
        bio="풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요"
        avatarSrc="/profile.jpg"
      />
      <div className="flex w-full flex-col gap-4">
        {links.map((link) => (
          <LinkCard key={link.label} label={link.label} href={link.href} />
        ))}
      </div>
    </main>
  );
}

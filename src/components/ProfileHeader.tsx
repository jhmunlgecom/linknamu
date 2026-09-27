type ProfileHeaderProps = {
  name: string;
  bio: string;
  avatarSrc: string;
};

export default function ProfileHeader({
  name,
  bio,
  avatarSrc,
}: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={avatarSrc}
        alt={`${name} 프로필 사진`}
        className="h-36 w-36 rounded-full object-cover shadow-[0_12px_30px_rgba(146,90,40,0.25)] ring-4 ring-white/80"
      />
      <h1 className="text-2xl font-bold tracking-tight text-[#3a2a1a]">
        {name}
      </h1>
      <p className="text-sm text-[#7a5c44]">{bio}</p>
    </div>
  );
}

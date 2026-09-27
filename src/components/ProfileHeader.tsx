type ProfileHeaderProps = {
  name: string;
  bio: string;
  avatarInitial: string;
};

export default function ProfileHeader({
  name,
  bio,
  avatarInitial,
}: ProfileHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 text-4xl font-bold text-white">
        {avatarInitial}
      </div>
      <h1 className="text-xl font-bold">{name}</h1>
      <p className="text-sm text-foreground/70">{bio}</p>
    </div>
  );
}

import More from "@/assets/icons/More.svg"

interface UserProfileProps {
  name: string;
  role: string;
  avatarUrl: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ name, role, avatarUrl }) => {
  return (
    <div className="flex gap-6 items-center">
      <div className="flex gap-5">
        <img
          src={avatarUrl}
          alt={`${name}'s avatar`}
          className="object-contain shrink-0 w-11 aspect-square"
        />
        <div className="flex flex-col my-auto">
          <h3 className="text-sm font-bold text-neutral-700">{name}</h3>
          <p className="self-start text-xs font-semibold text-neutral-600">{role}</p>
        </div>
      </div>
      <div>
      <button>
        <More/>
      </button>
      </div>
    </div>
  );
};

export default UserProfile;

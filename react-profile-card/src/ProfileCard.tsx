export type profiles = {
    name: string;
    age: number;
    bio: string;
};

type props = {
    profile: profiles;
};

export function ProfileCard({ profile }: props) {
    return (
        <li>
            <h2>{profile.name}</h2>
            <p>【年齢】 {profile.age}歳</p>
            <p>【自己紹介】{profile.bio}</p>
        </li>
    )
}
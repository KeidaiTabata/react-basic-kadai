import type React from "react";

export type profiles = {
    name: string,
    age: number,
    bio: string
};

type props = {
    count: number,
    profiles: profiles[],
    onIncrease: React.MouseEventHandler<HTMLButtonElement>

}

export function ProfileCard({ count, profiles, onIncrease }: props) {
    return (
        <div className="cardWrapper">
            <ul>
                {profiles.filter((_, index) => index === count).map(profile => (
                    <li key={profile.name}>
                        <h2>{profile.name}</h2>
                        <p>【年齢】 {profile.age}歳</p>
                        <p>【自己紹介】{profile.bio}</p>
                    </li>
                ))}
            </ul>
            <button onClick={onIncrease}>次のプロフィール</button>
        </div>
    )
}
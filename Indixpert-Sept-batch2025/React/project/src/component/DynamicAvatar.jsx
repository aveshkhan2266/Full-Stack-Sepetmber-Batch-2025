import defaultimage from '../assets/avatar-child-.svg'

export function DynamicAvatar({ image = defaultimage }) {
    return (
        <img
            src={image}
            className="mx-auto mb-3"
            width="120"
            height="120"
            alt="profile"
        />
    );
}
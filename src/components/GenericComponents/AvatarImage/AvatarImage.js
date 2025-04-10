const AvatarImage = ({ src, alt, avatar, setAvatar, display }) => {
  const avatarName = avatar?.split("/").pop();
  const srcName = src?.split("/").pop();

  return (
    <div
      className={
        display
          ? `avatar-image-container__${display}`
          : "avatar-image-container"
      }
      style={
        avatarName === srcName
          ? {
              scale: 1.1,
              borderColor: "#e89aab",
              backgroundColor: "rgba(120, 0, 200, 0.5)",
            }
          : {}
      }
    >
      <img
        src={src}
        alt={alt}
        onClick={(e) => setAvatar(e.target.src)}
        style={{ borderRadius: "50%", cursor: "pointer" }}
        className="avatar-image"
      />
    </div>
  );
};
export default AvatarImage;

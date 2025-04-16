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
              border: "2px solid #e89aab",
              boxShadow: "0 0 10pxrgb(226, 31, 73)",
              backgroundColor: "#0b0b0b99",
            }
          : {}
      }
    >
      <img
        src={src ? src : process.env.PUBLIC_URL + "/images/avatar.png"}
        alt={alt}
        onClick={(e) => setAvatar(e.target.src)}
        style={{ borderRadius: "50%", cursor: "pointer" }}
        className="avatar-image"
      />
    </div>
  );
};
export default AvatarImage;

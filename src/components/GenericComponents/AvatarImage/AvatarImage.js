const AvatarImage = ({ src, alt, setAvatar, display }) => {
  return (
    <div
      className={
        display
          ? `avatar-image-container__${display}`
          : "avatar-image-container"
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

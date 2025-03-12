const AvatarImage = ({ src, alt, onClick, display }) => {
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
        onClick={onClick}
        style={{ borderRadius: "50%", cursor: "pointer" }}
        className="avatar-image"
      />
    </div>
  );
};
export default AvatarImage;

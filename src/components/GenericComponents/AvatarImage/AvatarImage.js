const AvatarImage = ({ src, alt, onClick }) => {
  return (
    <div className="avatar-image-container">
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

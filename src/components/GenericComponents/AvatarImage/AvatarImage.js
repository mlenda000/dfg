import { useState, useEffect } from "react";

const AvatarImage = ({
  src,
  alt,
  avatar,
  setAvatar,
  display,
  playerSelection,
}) => {
  const [srcName, setSrcName] = useState("");
  const [avatarName, setAvatarName] = useState("");

  useEffect(() => {
    if (src && src !== "") {
      setSrcName(src.indexOf("/") > -1 ? src.split("/").pop() : src);
    }
  }, [src]);

  useEffect(() => {
    if (avatar && avatar !== "") {
      setAvatarName(
        avatar.indexOf("/") > -1 ? avatar.split("/").pop() : avatar
      );
    }
  }, [avatar]);

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
              scale: 1.2,
              border: "3px solid rgb(226, 31, 73)",
              boxShadow: "0 0 10px rgb(226, 31, 73)",
              zIndex: 2,
            }
          : { zIndex: 2 }
      }
    >
      <img
        src={
          src && src.includes("/")
            ? src
            : process.env.PUBLIC_URL + `/images/Avatars/${src}`
        }
        alt={alt}
        onClick={playerSelection ? (e) => setAvatar(e.target.src) : null}
        style={{
          borderRadius: "50%",
          cursor: playerSelection && "pointer",
          zIndex: 2,
        }}
        className="avatar-image"
      />
    </div>
  );
};
export default AvatarImage;

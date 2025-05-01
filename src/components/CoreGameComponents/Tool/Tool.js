import { useContext, useState, useEffect } from "react";
import { GameContext } from "../../../context/GameContext";
import InfluencerCard from "../InfluencerCard/InfluencerCard";

const Tool = ({ showResults }) => {
  const { currentInfluencer } = useContext(GameContext);

  return (
    <div className="tool__container">
      <img
        src={`${process.env.PUBLIC_URL}/images/tool/tool-wrapper.png`}
        alt="tool"
        className="tool-image"
        style={{
          display: "grid",
          placeItems: "center",
          position: "relative",
          width: "755px",
          height: "auto",
          zIndex: 5,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "30px",
          left: "-22%",
        }}
      >
        <div className="sliding-background">
          <InfluencerCard
            name={currentInfluencer?.caption}
            description={currentInfluencer?.bodyCopy}
            example="Influencer Example"
            category={currentInfluencer?.tacticUsed}
            villain={currentInfluencer?.villain}
            image={
              currentInfluencer?.newsImage
                ? process.env.PUBLIC_URL +
                  `/images/influencer/${currentInfluencer.newsImage}`
                : process.env.PUBLIC_URL + `/images/influencer/scientist.png`
            }
            display="modal"
          />
        </div>
      </div>

      <img
        src={`${process.env.PUBLIC_URL}/images/tool/tool-swiper.png`}
        className="tool-swiper"
        style={{}}
        alt="tool swiper"
      />

      <div
        style={{
          position: "absolute",
          width: "150px",
          top: "102px",
          right: "52px",
          zIndex: 5,
        }}
      >
        {!showResults ? (
          <img
            src={process.env.PUBLIC_URL + "/images/tool/answers/reading.png"}
            alt="reading"
            style={{
              width: "100%",
              animation: "fadeInOut 0.8s infinite alternate",
              top: "160px",
            }}
          />
        ) : currentInfluencer?.tacticUsed[0] === "True" ? (
          <img
            src={process.env.PUBLIC_URL + "/images/tool/answers/facts.png"}
            alt="reading"
            style={{
              width: "100%",
              animation: "fadeIn .5s ",
            }}
          />
        ) : (
          <ImageCarousel images={currentInfluencer?.tacticUsed} />
        )}
      </div>
      <style>
        {`
                    @keyframes fadeInOut {
                        from {
                            opacity: 1;
                        }
                        to {
                            opacity: 0;
                        }
                    }

                    @keyframes slideBackground {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(100%);
                        }
                    }

                   
                `}
      </style>
    </div>
  );
};

export const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [detected, setDetected] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setDetected(false);
    }, 3000);

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 1 second
    return () => clearInterval(interval);
  }, [images]);

  return (
    <>
      {detected ? (
        <img
          src={
            process.env.PUBLIC_URL + "/images/tool/answers/Fake-detected.png"
          }
          alt="reading"
          style={{
            width: "100%",
            top: "260px",
          }}
        />
      ) : (
        <img
          src={
            process.env.PUBLIC_URL +
            "/images/tool/answers/" +
            images[currentIndex].toLowerCase() +
            ".png"
          }
          alt={images[currentIndex]}
          style={{
            width: "100%",
          }}
        />
      )}
    </>
  );
};

export default Tool;

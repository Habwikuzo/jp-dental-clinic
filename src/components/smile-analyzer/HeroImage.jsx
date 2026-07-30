import heroSmile from "../../assets/images/smile-analyzer/hero-smile.jpg.png";
import AIScanCard from "./AIScanCard";
import SmileScoreCard from "./SmileScoreCard";

function HeroImage() {
  return (
    <div className="relative flex justify-center items-center">

      <img
        src={heroSmile}
        alt="AI Smile Analysis"
        className="rounded-3xl shadow-2xl w-full max-w-2xl"
      />

      <AIScanCard />

      <SmileScoreCard />

    </div>
  );
}

export default HeroImage;
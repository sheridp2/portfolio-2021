import React, { Suspense } from "react";
import Lottie from "react-lottie";
import Loading from "./Loading";

const LottieAnimate = ({ animationData }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <Suspense fallback={<Loading />}>
      {/* To override default onClick pause by Lottie */}
      <div onClick={() => null}>
        <Lottie options={defaultOptions} style={{ height: 400 }} />
      </div>
    </Suspense>
  );
};

export default LottieAnimate;

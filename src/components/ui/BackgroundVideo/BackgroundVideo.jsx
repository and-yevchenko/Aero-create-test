import './BackgroundVideo.scss';

export const BackgroundVideo = () => {
  return (
    <video autoPlay muted loop playsInline className="background-video">
      <source src="/Aero-create-test/BackgroundVideo.mp4" type="video/mp4" />
    </video>
  );
};

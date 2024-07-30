import './BackgroundVideo.scss';

export const BackgroundVideo = () => {
  return (
    <video autoPlay muted loop playsInline className="background-video">
      <source src="./BackgroundVideo.mp4" type="video/mp4" />
    </video>
  );
};

'use client';

export default function CloudinaryPlayer() {
  return (
    <div className="video-container w-full h-full shadow-2xl">
      <iframe
        src="https://player.cloudinary.com/embed/?cloud_name=dk8syjt2z&public_id=Background-video_nmha1b&profile=cld-default&autoplay=true&muted=true&loop=true&controls=false"
        width="100%"
        height="100%"
        className="w-full h-full object-cover rounded-lg shadow-2xl"
        style={{ 
          height: '100%', 
          width: '100%', 
          aspectRatio: '16 / 9',
          border: 'none',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
        }}
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowFullScreen
        frameBorder="0"
      />
    </div>
  );
}


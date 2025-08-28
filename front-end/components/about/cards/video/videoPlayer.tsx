export const VideoPlayer: React.FC = () => {
  return (
    <div className=" p-4">
      <iframe src="http://www.youtube.com/embed/dyK6Y-rsuZQ" className="w-full h-96 lg:h-96 rounded-4xl" title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
    </div>
  )
}

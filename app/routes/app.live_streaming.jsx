import VideoChat from './VideoChat';
function live_streaming() {
  const roomUrl = 'https://harish-verma.daily.co/testing1';

  return (
    <>
      <h1>Live Streaming App</h1>
      <div className="newpage">
        <VideoChat roomUrl={roomUrl} />
      </div>
    </>
  );
}

export default live_streaming;

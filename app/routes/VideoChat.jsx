import React, { useEffect, useMemo } from 'react';

function VideoChat({ roomUrl, width, height }) {
  const createIframe = useMemo(() => {
    return () => {
      const iframe = document.getElementById('call-frame');
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer 87688ff2b60eaf6bf76bb6d28e5d311ca27029265aa4dbd5b3efe3b56190f178");
        
        const raw = JSON.stringify({
          "properties": {
            "room_name": "testing1",
            "is_owner": true
          }
        });
        
        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw
        };
        
        fetch("https://api.daily.co/v1/meeting-tokens", requestOptions)
          .then(response => response.json())
          .then(result => {
            iframe.src = roomUrl + "?t=" + result.token;
            iframe.allow = 'camera; microphone; fullscreen';
            iframe.width = '100%';
            iframe.height = '500px';
          })
          .catch(error => console.log('error', error));
      

      return iframe;
    };
  }, [roomUrl]);

  useEffect(() => {
    const iframe = createIframe();

    return () => {
      if (iframe) {
        iframe.src="";
      }
    };
  }, [createIframe]);

  return (
    <div>
      <iframe id="call-frame"></iframe>
    </div>
  );
}

export default VideoChat;

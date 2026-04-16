import { ImageResponse } from 'next/og';

export const alt = 'Fernando Lima';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

async function loadFont(url) {
  const res = await fetch(url);
  return res.arrayBuffer();
}

export default async function Image() {
  const pressStart = await loadFont(
    'https://fonts.gstatic.com/s/pressstart2p/v16/e3t4euO8T-267oIAQAu6jDQyK0nS.ttf'
  );

  const bg = '#15120b';
  const ink = '#efe9d8';
  const muted = '#8f887c';
  const accent = '#e08a2e';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: bg,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontFamily: 'PressStart2P',
            fontSize: 76,
            color: ink,
            lineHeight: 1,
            letterSpacing: 0,
          }}
        >
          Fernando Lima
        </div>

        <div
          style={{
            display: 'flex',
            width: 14,
            height: 14,
            background: accent,
            marginTop: 44,
            marginBottom: 44,
          }}
        />

        <div
          style={{
            display: 'flex',
            fontFamily: 'PressStart2P',
            fontSize: 22,
            color: muted,
            lineHeight: 1,
            letterSpacing: 0,
          }}
        >
          fernandolima.pro
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'PressStart2P',
          data: pressStart,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  );
}

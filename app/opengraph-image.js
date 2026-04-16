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

  const px = 26;
  const ink = '#1a1a1a';
  const amber = '#b45309';
  const paper = '#faf7ef';

  const grid = [
    '############',
    '############',
    '##..........',
    '##..........',
    '##..........',
    '##########..',
    '##########..',
    '##..........',
    '##..........',
    '##..........',
    '##..........',
    '##..........',
    '##..........',
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: paper,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '0 96px',
        }}
      >
        {/* pixel F + dot */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginRight: 80,
          }}
        >
          {grid.map((row, y) => (
            <div key={y} style={{ display: 'flex', height: px }}>
              {row.split('').map((c, x) => (
                <div
                  key={x}
                  style={{
                    width: px,
                    height: px,
                    background: c === '#' ? ink : 'transparent',
                  }}
                />
              ))}
            </div>
          ))}
          {/* amber pixel dot under the F */}
          <div style={{ display: 'flex', marginTop: px * 0.6 }}>
            <div style={{ width: px * 2, height: px * 2, background: amber }} />
          </div>
        </div>

        {/* text block */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              fontFamily: 'PressStart2P',
              fontSize: 58,
              color: ink,
              lineHeight: 1,
              letterSpacing: 0,
            }}
          >
            Fernando
          </div>
          <div
            style={{
              display: 'flex',
              fontFamily: 'PressStart2P',
              fontSize: 58,
              color: ink,
              lineHeight: 1,
              letterSpacing: 0,
              marginTop: 24,
            }}
          >
            Lima
          </div>
          <div
            style={{
              display: 'flex',
              fontFamily: 'PressStart2P',
              fontSize: 18,
              color: '#78716c',
              lineHeight: 1,
              letterSpacing: 0,
              marginTop: 44,
            }}
          >
            fernandolima.pro
          </div>
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

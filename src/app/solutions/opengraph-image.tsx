import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Eco-Friendly Cat Litter Solutions';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #2D6A4F 0%, #40916C 50%, #52B788 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: '40px',
            fontSize: '60px',
            opacity: 0.4,
            display: 'flex',
          }}
        >
          🌍
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '100px',
            right: '60px',
            fontSize: '50px',
            opacity: 0.3,
            display: 'flex',
          }}
        >
          ♻️
        </div>

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          {/* Site name */}
          <div
            style={{
              fontSize: '24px',
              fontWeight: 500,
              color: '#B7E4C7',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span style={{ display: 'flex' }}>🐱</span>
            <span>EcoCatLitters</span>
          </div>

          {/* Page Title */}
          <div
            style={{
              fontSize: '60px',
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: '24px',
              display: 'flex',
            }}
          >
            Sustainable Solutions
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: '28px',
              fontWeight: 400,
              color: '#FFFFFF',
              opacity: 0.9,
              marginBottom: '40px',
              display: 'flex',
            }}
          >
            Better Choices for Your Cat & The Planet
          </div>

          {/* Solution types */}
          <div
            style={{
              display: 'flex',
              gap: '20px',
            }}
          >
            {['🌾 Plant-Based', '🌲 Wood', '🥜 Nut Shell'].map((type) => (
              <div
                key={type}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: '#FFFFFF',
                  fontSize: '20px',
                  fontWeight: 500,
                  padding: '14px 28px',
                  borderRadius: '30px',
                  display: 'flex',
                }}
              >
                {type}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            fontSize: '18px',
            color: '#FFFFFF',
            opacity: 0.7,
            display: 'flex',
          }}
        >
          ecocatlitters.com/solutions
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

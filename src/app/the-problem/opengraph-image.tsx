import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'The Problem with Clay Cat Litter - Environmental Crisis';
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
          background: 'linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 50%, #1B4332 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
        }}
      >
        {/* Warning icon */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            right: '40px',
            fontSize: '60px',
            display: 'flex',
          }}
        >
          ⚠️
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
              color: '#74C69D',
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
              fontSize: '56px',
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: '24px',
              display: 'flex',
            }}
          >
            The Dirty Truth About Clay Litter
          </div>

          {/* Stat highlight */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '40px',
              marginBottom: '30px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '48px',
                  fontWeight: 700,
                  color: '#DC2626',
                  display: 'flex',
                }}
              >
                2M+
              </div>
              <div
                style={{
                  fontSize: '18px',
                  color: '#B7E4C7',
                  display: 'flex',
                }}
              >
                Tons in Landfills/Year
              </div>
            </div>
            <div
              style={{
                width: '2px',
                height: '60px',
                background: 'rgba(255,255,255,0.2)',
                display: 'flex',
              }}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '48px',
                  fontWeight: 700,
                  color: '#F59E0B',
                  display: 'flex',
                }}
              >
                500+
              </div>
              <div
                style={{
                  fontSize: '18px',
                  color: '#B7E4C7',
                  display: 'flex',
                }}
              >
                Years to Decompose
              </div>
            </div>
          </div>

          {/* CTA */}
          <div
            style={{
              background: '#FF6B35',
              color: '#FFFFFF',
              fontSize: '22px',
              fontWeight: 600,
              padding: '14px 36px',
              borderRadius: '50px',
              display: 'flex',
            }}
          >
            Learn the Impact
          </div>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            fontSize: '18px',
            color: '#74C69D',
            opacity: 0.8,
            display: 'flex',
          }}
        >
          ecocatlitters.com/the-problem
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

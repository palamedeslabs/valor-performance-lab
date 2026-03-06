export default function App() {
  // THE NEW PREMIUM COLOR: #C5A059 (Muted Titanium Gold)
  const accent = '#C5A059';
  const bg = '#080808';

  return (
    <div style={{ backgroundColor: bg, color: 'white', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', WebkitFontSmoothing: 'antialiased' }}>
      
      {/* Navigation */}
      <nav style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '24px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '36px', height: '36px', border: `1px solid ${accent}`, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(45deg)' }}>
              <span style={{ color: accent, fontWeight: '800', fontSize: '18px', transform: 'rotate(-45deg)', letterSpacing: '-1px' }}>V</span>
            </div>
            <div>
              <h1 style={{ margin: 0, fontSize: '16px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '800' }}>Valor</h1>
              <p style={{ margin: 0, fontSize: '9px', color: accent, textTransform: 'uppercase', letterSpacing: '4px', opacity: 0.8 }}>Performance Lab</p>
            </div>
          </div>
          <button style={{ backgroundColor: 'transparent', color: accent, border: `1px solid ${accent}`, padding: '10px 24px', borderRadius: '2px', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', cursor: 'pointer', letterSpacing: '2px' }}>
            Request Diagnostic
          </button>
        </div>
      </nav>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 24px' }}>
        
        {/* Hero Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '100px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-block', padding: '4px 12px', border: `1px solid rgba(197, 160, 89, 0.2)`, borderRadius: '2px', marginBottom: '32px' }}>
              <span style={{ fontSize: '9px', color: accent, textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '2px' }}>TPI Medical & Power Professional</span>
            </div>
            <h2 style={{ fontSize: 'clamp(3.5rem, 12vw, 9rem)', fontWeight: '900', textTransform: 'uppercase', margin: '0 0 32px 0', lineHeight: '0.8', letterSpacing: '-5px' }}>
              Force <br /> <span style={{ color: accent }}>Mastered.</span>
            </h2>
            <p style={{ color: '#666', fontSize: '18px', maxWidth: '420px', lineHeight: '1.6', fontWeight: '400' }}>
              The elite destination for high-velocity golf biomechanics. We bridge the gap between clinical science and raw power.
            </p>
          </div>

          <div style={{ aspectRatio: '4/5', backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
             <span style={{ color: 'rgba(255,255,255,0.05)', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '8px', transform: 'rotate(90deg)' }}>Optimization_System</span>
             <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: accent, fontSize: '10px', fontFamily: 'monospace' }}>[01] STABILITY</div>
             <div style={{ position: 'absolute', bottom: '40px', left: '20px', color: accent, fontSize: '10px', fontFamily: 'monospace' }}>[02] MOBILITY</div>
             <div style={{ position: 'absolute', bottom: '60px', left: '20px', color: accent, fontSize: '10px', fontFamily: 'monospace' }}>[03] VELOCITY</div>
          </div>
        </div>

        {/* Services / Modules */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginTop: '140px' }}>
          <div style={{ padding: '48px', border: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(255,255,255,0.01)' }}>
            <div style={{ color: accent, fontSize: '12px', marginBottom: '32px', fontFamily: 'monospace' }}>MODULE_01</div>
            <h3 style={{ fontSize: '22px', textTransform: 'uppercase', margin: '0 0 20px 0', fontWeight: '800', letterSpacing: '-1px' }}>The 360° Diagnostic</h3>
            <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.7' }}>A clinical intake utilizing TPI Level 3 protocols to identify the power leaks holding back your swing.</p>
          </div>
          <div style={{ padding: '48px', border: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(255,255,255,0.01)' }}>
            <div style={{ color: accent, fontSize: '12px', marginBottom: '32px', fontFamily: 'monospace' }}>MODULE_02</div>
            <h3 style={{ fontSize: '22px', textTransform: 'uppercase', margin: '0 0 20px 0', fontWeight: '800', letterSpacing: '-1px' }}>Power Engineering</h3>
            <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.7' }}>Translating physical stability into raw, repeatable clubhead speed through specialized force-production training.</p>
          </div>
          <div style={{ padding: '48px', border: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(255,255,255,0.01)' }}>
            <div style={{ color: accent, fontSize: '12px', marginBottom: '32px', fontFamily: 'monospace' }}>MODULE_03</div>
            <h3 style={{ fontSize: '22px', textTransform: 'uppercase', margin: '0 0 20px 0', fontWeight: '800', letterSpacing: '-1px' }}>Clinical Rehab</h3>
            <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.7' }}>High-performance physical therapy designed for the modern golfer. Move better, play longer, recover faster.</p>
          </div>
        </div>
      </main>

      <footer style={{ padding: '80px 24px', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '100px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
           <p style={{ fontSize: '10px', color: '#444', textTransform: 'uppercase', letterSpacing: '2px' }}>© 2026 VALOR PERFORMANCE LAB / PRECISION GOLF</p>
           <p style={{ fontSize: '10px', color: accent, textTransform: 'uppercase', letterSpacing: '2px' }}>STABILITY // POWER // LONGEVITY</p>
        </div>
      </footer>
    </div>
  );
}
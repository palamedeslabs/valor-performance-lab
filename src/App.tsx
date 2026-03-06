export default function App() {
  const accent = '#C5A059';
  const bg = '#080808';

  return (
    <div style={{ backgroundColor: bg, color: 'white', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', WebkitFontSmoothing: 'antialiased' }}>
      
      {/* Navigation */}
      <nav style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '24px 0', position: 'sticky', top: 0, backgroundColor: 'rgba(8,8,8,0.8)', backdropFilter: 'blur(10px)', zIndex: 100 }}>
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
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <div style={{ display: 'none', md: 'flex', gap: '24px' }}>
                <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', color: '#666', cursor: 'pointer' }}>Diagnostic</span>
                <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '2px', color: '#666', cursor: 'pointer' }}>The Lab</span>
            </div>
            <button style={{ backgroundColor: 'transparent', color: accent, border: `1px solid ${accent}`, padding: '10px 24px', borderRadius: '2px', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', cursor: 'pointer', letterSpacing: '2px' }}>
                Book Assessment
            </button>
          </div>
        </div>
      </nav>

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px' }}>
        
        {/* Hero Section */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '100px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '4px 12px', border: `1px solid rgba(197, 160, 89, 0.2)`, borderRadius: '2px', marginBottom: '32px' }}>
              <div style={{ width: '6px', height: '6px', backgroundColor: accent, borderRadius: '50%' }}></div>
              <span style={{ fontSize: '9px', color: accent, textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '2px' }}>TPI Level 3 Medical & Power Professional</span>
            </div>
            <h2 style={{ fontSize: 'clamp(3.5rem, 12vw, 9rem)', fontWeight: '900', textTransform: 'uppercase', margin: '0 0 32px 0', lineHeight: '0.8', letterSpacing: '-5px' }}>
              The Science <br /> <span style={{ color: accent }}>Of Speed.</span>
            </h2>
            <p style={{ color: '#888', fontSize: '18px', maxWidth: '460px', lineHeight: '1.6', fontWeight: '400', marginBottom: '40px' }}>
              Bridging the gap between the clinical table and the tee box. We utilize advanced biomechanical data to engineer a swing that is faster, more efficient, and pain-free.
            </p>
            <div style={{ display: 'flex', gap: '40px' }}>
                <div>
                    <div style={{ fontSize: '24px', fontWeight: '800', color: accent }}>+15MPH</div>
                    <div style={{ fontSize: '10px', color: '#444', textTransform: 'uppercase', letterSpacing: '2px' }}>Avg. Club Speed Gain</div>
                </div>
                <div>
                    <div style={{ fontSize: '24px', fontWeight: '800', color: accent }}>100%</div>
                    <div style={{ fontSize: '10px', color: '#444', textTransform: 'uppercase', letterSpacing: '2px' }}>Data-Driven Customization</div>
                </div>
            </div>
          </div>

          <div style={{ aspectRatio: '4/5', backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
             <div style={{ position: 'absolute', top: 0, right: 0, padding: '20px', fontSize: '10px', color: '#333', fontFamily: 'monospace' }}>
                COORD_045.2 <br/> DATA_ACTIVE
             </div>
             <span style={{ color: 'rgba(255,255,255,0.03)', textTransform: 'uppercase', fontSize: '120px', fontWeight: '900', letterSpacing: '-10px', transform: 'rotate(-90deg)' }}>VALOR</span>
             <div style={{ position: 'absolute', bottom: '30px', left: '30px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ color: accent, fontSize: '11px', fontFamily: 'monospace', letterSpacing: '2px' }}>[01] BIOMECHANICAL AUDIT</div>
                <div style={{ color: accent, fontSize: '11px', fontFamily: 'monospace', letterSpacing: '2px' }}>[02] KINETIC POWER BUILD</div>
                <div style={{ color: accent, fontSize: '11px', fontFamily: 'monospace', letterSpacing: '2px' }}>[03] ATHLETIC RESILIENCY</div>
             </div>
          </div>
        </div>

        {/* The Valor Methodology */}
        <div style={{ marginTop: '160px', textAlign: 'center' }}>
            <h3 style={{ color: accent, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '6px', marginBottom: '24px' }}>The Valor Protocol</h3>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '-2px', marginBottom: '80px' }}>Engineering The Elite Athlete.</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
              <div style={{ textAlign: 'left', padding: '40px', border: '1px solid rgba(255,255,255,0.05)', transition: '0.3s' }}>
                <div style={{ color: accent, fontSize: '12px', marginBottom: '32px', fontFamily: 'monospace' }}>PHASE_01</div>
                <h4 style={{ fontSize: '24px', textTransform: 'uppercase', margin: '0 0 20px 0', fontWeight: '800' }}>Biomechanical Audit</h4>
                <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.7' }}>
                    Every athlete begins with a deep-dive audit. We identify the power leaks—stability, mobility, or motor control—that are dictating your swing flaws. We measure, we don't guess.
                </p>
              </div>
              <div style={{ textAlign: 'left', padding: '40px', border: '1px solid rgba(255,255,255,0.05)', transition: '0.3s' }}>
                <div style={{ color: accent, fontSize: '12px', marginBottom: '32px', fontFamily: 'monospace' }}>PHASE_02</div>
                <h4 style={{ fontSize: '24px', textTransform: 'uppercase', margin: '0 0 20px 0', fontWeight: '800' }}>Kinetic Power Build</h4>
                <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.7' }}>
                    Explosive clubhead speed is a byproduct of efficient force production. We engineer your body to produce and transfer power from the ground up, resulting in effortless distance.
                </p>
              </div>
              <div style={{ textAlign: 'left', padding: '40px', border: '1px solid rgba(255,255,255,0.05)', transition: '0.3s' }}>
                <div style={{ color: accent, fontSize: '12px', marginBottom: '32px', fontFamily: 'monospace' }}>PHASE_03</div>
                <h4 style={{ fontSize: '24px', textTransform: 'uppercase', margin: '0 0 20px 0', fontWeight: '800' }}>Athletic Resiliency</h4>
                <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.7' }}>
                    Golf longevity is built through specialized recovery and physical therapy. Eliminate back, hip, and shoulder pain through protocols designed specifically for the golfer's anatomy.
                </p>
              </div>
            </div>
        </div>
      </main>

      <footer style={{ padding: '100px 24px', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '100px', textAlign: 'center' }}>
           <p style={{ fontSize: '10px', color: '#333', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '20px' }}>Valor Performance Lab / South Florida</p>
           <p style={{ fontSize: '10px', color: accent, textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>Move Better. Play Harder. Play Longer.</p>
      </footer>
    </div>
  );
}
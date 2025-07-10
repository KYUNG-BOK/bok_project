import './VercelGuide.scss';

function VercelGuide() {
  return (
    <div className="vercel-guide-page">
      <div className="vercel-guide-container">
        <h1 className="title">🔧 Vercel + React + Vite<br />새로고침 시 404 오류 해결법</h1>
        
        <section>
          <h2>💡 문제</h2>
          <p>
            React 앱을 <strong>Vercel</strong>에 배포한 뒤,
            <br />`/about`, `/contact` 같은 <strong>서브 라우트에서 새로고침</strong>하면 404 오류가 발생합니다.
          </p>
        </section>

        <section>
          <h2>✅ 원인</h2>
          <p>
            React는 SPA(Single Page Application)이므로 브라우저가 직접 라우트를 처리합니다.
            <br />
            그러나 Vercel은 정적 파일만 제공하므로 <strong>서브 라우트로 직접 접근하면 index.html을 못 찾습니다.</strong>
          </p>
        </section>

        <section>
          <h2>🚀 해결 방법</h2>
          <ol>
            <li>
              <strong><code>vercel.json</code> 생성</strong>
              <pre>
{`{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}`}
              </pre>
              <p>→ package.json과 동일한 디렉토리에 파일을 생성합니다.</p>
              <p>→ 모든 경로를 <code>/index.html</code>로 리다이렉트하도록 설정합니다.</p>
            </li>
            <li>
              <strong><code>vite.config.js</code>에 base 설정</strong>
              <pre>
{`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',        // 꼭 추가해주세요.
  plugins: [react()],
});`}
              </pre>
              <p>→ 정적 리소스가 루트 기준으로 불러와지도록 보장합니다.</p>
            </li>
          </ol>
        </section>

        <section>
          <h2>🎉 결과</h2>
          <p>
            이제 새로고침 시에도 SPA 라우팅이 정상적으로 동작하며,
            <br />
            서브페이지에서 <strong>404 오류 없이 부드럽게</strong> 작동합니다.
          </p>
        </section>
      </div>
    </div>
  );
}

export default VercelGuide;

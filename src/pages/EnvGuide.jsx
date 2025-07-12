import './EnvGuide.scss';

function EnvGuide() {
  return (
    <div className="vercel-guide-page">
      <div className="vercel-guide-container">
        <div className="title-wrapper">
          <h1 className="title">🔐 Vite + Vercel 환경변수 (.env) 완벽 설정 가이드</h1>
        </div>
        <div className="scrollable-content">
          <section>
            <h2>💡 왜 환경변수가 필요할까?</h2>
            <p>
              API 키를 코드에 직접 작성하면 <strong>보안상 매우 위험</strong>합니다.<br />
              .env 파일에 따로 분리하고, 배포 서버에는 숨긴 상태로 설정해야 합니다.
            </p>
          </section>

          <section>
            <h2>🧩 1. .env 파일 만들기</h2>
            <pre>
{`VITE_WEATHER_API_KEY=abcdefg123456
VITE_BASE_URL=https://api.openweathermap.org/data/2.5`}
            </pre>
            <p><strong>주의:</strong> <code>VITE_</code> 접두어가 꼭 필요해요! (Vite에서만 인식됨)</p>
          </section>

          <section>
            <h2>🧩 2. 코드에서 사용하기</h2>
            <pre>
{`const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
const baseUrl = import.meta.env.VITE_BASE_URL;

fetch(\`\${baseUrl}/weather?appid=\${apiKey}&q=seoul\`);`}
            </pre>
          </section>

          <section>
            <h2>🧼 3. .env Git에 올리지 않기</h2>
            <pre>
{`# .gitignore
.env`}
            </pre>
            <p>→ GitHub에 민감 정보가 올라가는 걸 막아줍니다.</p>
          </section>

          <section>
            <h2>🌐 4. Vercel에 환경변수 등록하기</h2>
            <ol>
              <li>Vercel → 프로젝트 → <strong>Settings → Environment Variables</strong></li>
              <li>Key: <code>VITE_WEATHER_API_KEY</code> / Value: <code>abcdefg123456</code></li>
              <li><strong>배포 재시작</strong>하면 적용돼요!</li>
            </ol>
          </section>

          <section>
            <h2>🚨 자주 하는 실수 체크리스트</h2>
            <ul>
              <li>✅ <code>VITE_</code> 붙였는지?</li>
              <li>✅ Vercel에도 동일하게 등록했는지?</li>
              <li>✅ 재배포 했는지?</li>
              <li>✅ <code>.env</code>는 <code>.gitignore</code>에 넣었는지?</li>
            </ul>
          </section>

          <section>
            <h2>🎁 실전 예시 - Kakao Map 연동</h2>
            <pre>
{`// .env
VITE_KAKAO_API_KEY=abcd-1234-kakao`}
            </pre>
            <pre>
{`// React 코드
const KAKAO_KEY = import.meta.env.VITE_KAKAO_API_KEY;

useEffect(() => {
  const script = document.createElement("script");
  script.src = \`//dapi.kakao.com/v2/maps/sdk.js?appkey=\${KAKAO_KEY}&autoload=false\`;
  script.async = true;
  document.head.appendChild(script);
}, []);`}
            </pre>
          </section>
        </div>
      </div>
    </div>
  );
}

export default EnvGuide;

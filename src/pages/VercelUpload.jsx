import './VercelGuide.scss';

function VercelGuide() {
  return (
    <div className="vercel-guide-page">
      <div className="vercel-guide-container">
        <div className="title-wrapper">

        <h1 className="title">🔧 React + Vite Vercel 배포<br /> CLI vs GitHub, 오류 없이 완성하기</h1>
         </div>
         <div className="scrollable-content">
       <section>
  <h2>💡 문제</h2>
  <p>
    React 앱을 <strong>Vercel</strong>에 배포한 뒤,<br />
    <code>/about</code>, <code>/contact</code> 같은 <strong>서브 라우트에서 새로고침</strong>하면 404 오류가 발생합니다.
  </p>
  <p>
    또한 GitHub 연동으로 배포할 경우, <strong>파일명 대소문자 자동 변경 문제</strong>로 인해
    Vercel에서 파일을 찾지 못하는 문제가 발생할 수 있습니다.
  </p>
</section>

<section>
  <h2>✅ 원인</h2>
  <ul>
    <li>
      React는 SPA(Single Page Application)이므로 <strong>브라우저가 라우팅</strong>을 처리합니다.<br />
      하지만 정적 파일만 제공하는 Vercel에서는 서브 라우트 접근 시 <code>index.html</code>을 못 찾게 됩니다.
    </li>
    <li>
      GitHub 연동 시, Git 내부에서 <strong>파일명 대소문자 변경이 무시되는</strong> 경우가 있어
      실제 배포 시 Linux 기반 서버에서는 <code>App.jsx</code> → <code>app.jsx</code> 등으로 인식 충돌이 생깁니다.
    </li>
  </ul>
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
      <p>→ 모든 경로를 <code>index.html</code>로 리다이렉트합니다.</p>
    </li>
    <li>
      <strong><code>vite.config.js</code>에 base 설정</strong>
      <pre>
{`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
});`}
      </pre>
      <p>→ 정적 리소스를 루트 기준으로 불러올 수 있게 합니다.</p>
    </li>
  </ol>
</section>

<section>
  <h2>📦 Vercel 배포 방식 두 가지</h2>
  <ol>
    <li>
      <strong>1. GitHub 연동</strong>
      <p>
        GitHub 저장소와 Vercel을 연동하면 커밋할 때마다 자동으로 배포됩니다.<br />
        하지만 <strong>파일명 대소문자 이슈</strong>로 인해 실제 배포에서 문제가 발생할 수 있습니다.
      </p>
    </li>
    <li>
      <strong>2. Vercel CLI로 직접 배포</strong>
      <p>
        VSCode의 터미널에서 <code>vercel</code> 명령어로 현재 로컬 코드를 직접 배포할 수 있습니다.<br />
        GitHub와 독립적으로 동작하므로 <strong>더 유연하게 실시간 배포</strong>가 가능합니다.
      </p>
      <pre>
{`# 1. CLI 설치 (처음 1회)
npm install -g vercel

# 2. 로그인
vercel login
# 👉 이메일 입력 → 메일로 인증 링크 수신 → 클릭하면 로그인 완료

# 3. 최초 배포 시 (프로젝트 연결, 설정 포함)
vercel

# 4. 실제 프로덕션 배포 시
vercel --prod`}
      </pre>

      <p><strong>처음 <code>vercel</code> 명령어 입력 시</strong> 나오는 질문 예시:</p>
      <ul>
        <li>✔️ 어떤 프로젝트에 연결할까요? (기존 프로젝트 또는 새 프로젝트)</li>
        <li>✔️ 어떤 디렉토리를 배포할까요? (보통 기본값으로 Enter)</li>
        <li>✔️ 어떤 프레임워크인가요? (React, Vite 등 자동 감지됨)</li>
        <li>✔️ 환경변수 설정할까요? (필요 시 설정 가능)</li>
      </ul>
      <p>
        이런 설정이 끝나면 `.vercel` 폴더가 생성되고, 이후엔 <code>vercel --prod</code>만으로 빠르게 배포 가능합니다!
      </p>
    </li>
  </ol>
</section>


<section>
  <h2>🎉 결과</h2>
  <p>
    이제 Vercel에 배포한 React 앱은 <strong>서브 라우트에서 새로고침해도 404 오류가 발생하지 않으며</strong>,
    <br />GitHub 연동 배포 시의 이슈도 사전에 예방할 수 있습니다.
  </p>
</section>

        </div>
      </div>
    </div>
  );
}

export default VercelGuide;

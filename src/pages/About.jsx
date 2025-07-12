import './About.scss';

function About() {
  return (
    <div className="about-page">
      <div className="about-card">
        <h1 className="about-title">👋 안녕하세요, 코코입니다!</h1>

        <p>저는 실무 경험 없이 시작했지만, 매일 꾸준히 성장하고자 노력하는 프론트엔드 개발자 지망생입니다.</p>

        <h2>📚 공부하는 법</h2>
        <p>직접 코드를 작성하고 문제를 해결하는 것을 좋아하며, 공식 문서와 실습을 통해 깊이 이해하려고 합니다.</p>

        <h2>💡 개발 철학</h2>
        <p>항상 사용자의 입장에서 생각하고, 유지보수하기 쉬운 코드를 작성하는 것을 중요하게 생각합니다.</p>

        <h2>🎯 앞으로의 목표</h2>
        <ul>
          <li>React 전문가 되기</li>
          <li>오픈소스 프로젝트 참여하기</li>
        </ul>

        <p>저에 대해 더 궁금하시면 언제든 Contact 페이지를 통해 연락 주세요!</p>
      </div>
    </div>
  );
}

export default About;

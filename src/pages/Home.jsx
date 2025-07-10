import './Home.css';

  const posts = [
  {
    title: 'TodoList만들기 with 리액트',
    date: '2025.07.08',
    tags: ['axios', 'todoList', '개발기록', '오즈코딩스쿨','초격차_프론트엔드_12기'],
    description: 'react상태관리, 커스텀 훅, 모달, 드래그앤드롭 정렬을 구현한 내용들을 정리했습니다.',
    link: 'https://velog.io/@yoonddubi/TodoList%EB%A7%8C%EB%93%A4%EA%B8%B0-with-%EB%A6%AC%EC%95%A1%ED%8A%B8',
    image: 'https://velog.velcdn.com/images/yoonddubi/post/0e078c59-7e96-4c1f-a231-eda843886f70/image.png',

  },
  {
    title: 'React 커스텀 훅 `useFetch` 리팩토링 해보기',
    date: '2025.07.07',
    tags: ['개발기록', '커스텀훅','오즈코딩스쿨','초격차_프론트엔드_12기','useFetch'],
    description: '기존 useEffect + fetch 패턴을 커스텀 훅으로 리팩토링한 과정과 개선 포인트를 정리했습니다.',
    link: 'https://velog.io/@yoonddubi/250707',
    image: 'https://velog.velcdn.com/images/yoonddubi/post/f0c0b29e-e979-4d1d-ae67-ffed7d86d201/image.png',
  },
  {
    title: 'AG Grid와 마크다운 에디터로 구현한 공지사항 폼 만들기',
    date: '2025.07.06',
    tags: ['AG-GRID','MARKDOWN','REACT','개발기록','오즈코딩스쿨','초격차_프론트엔드_12기'],
    description: 'AG-GRID로 제작된 게시판을 마크다운 편집기능 구현한 내용입니다.',
    link: 'https://velog.io/@yoonddubi/0706',
    image: 'https://velog.velcdn.com/images/yoonddubi/post/f7b79747-77bc-49b6-b24b-e83aa97d0bd8/image.png',
  },
  {
    title: 'AG Grid로 공지사항 게시판 템플릿 만들기',
    date: '2025.07.05',
    tags: ['AG-GRID','REACT','개발기록','오즈코딩스쿨','초격차_프론트엔드_12기'],
    description: 'AG-GRID기능을 사용하여 게시판 구현한 내용입니다.',
    link: 'https://velog.io/@yoonddubi/2507051',
    image: 'https://velog.velcdn.com/images/yoonddubi/post/a2eee45f-70a3-45de-a1b6-e77f794b4e02/image.png',
  },
  {
    title: '🧩 AG Grid Enterprise 체험 시작! (1개월 Trial)',
    date: '2025.07.05',
    tags: ['AG-GRID','개발기록','오즈코딩스쿨','초격차_프론트엔드_12기'],
    description: 'AG Grid Enterprise Trial 버전을 공식적으로 체험하게 되는 내용입니다.',
    link: 'https://velog.io/@yoonddubi/250705',
    image: 'https://velog.velcdn.com/images/yoonddubi/post/a1ac9086-6c54-443c-917d-8740ab93f6ec/image.gif',
  },
  {
    title: '',
    date: '',
    tags: [],
    description: '',
    link: '#',
    image: '',
  },
  {
    title: '',
    date: '',
    tags: [],
    description: '',
    link: '#',
    image: '',
  },
  {
    title: '',
    date: '',
    tags: [],
    description: '',
    link: '#',
    image: '',
  },
];
function Home() {
  return (
<div className="home-container">
      <h1 className="home-title"></h1>
      <div className="post-grid">
        {posts.map((post, index) => (
        <a
          href={post.link}
          key={index}
          className={`post-card ${post.link === '#' ? 'post-card-disabled' : ''}`}
          target={post.link === '#' ? '_self' : '_blank'}
          rel="링크랍니다"
          >
          
           {/* 준비중 뱃지 표시 */}
        {post.link === '#' && (
          <div className="badge">준비중</div>
        )}

          
        <img src={post.image} alt={post.title} className="post-image" />
        <h2>{post.title}</h2>
        <p className="post-date">{post.date}</p>
        <p className="post-desc">{post.description}</p>
        {post.tags.length > 0 && (
          <div className="post-tags">
          {post.tags.map((tag, i) => (
           <a
              key={i}
              href={`https://velog.io/search?q=${encodeURIComponent(tag)}`}
              target="_blank"
              rel="tag"
              className="post-tag"
            >
      #{tag}
    </a>
          ))}
        </div>
      )}
  </a>
        ))}
      </div>
    </div>
  );
}

export default Home;

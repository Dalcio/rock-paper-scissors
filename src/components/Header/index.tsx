import useStore from 'store';

const Header = () => {
  const score = useStore((s) => s.score);

  return (
    <div>
      Header
      <h1>{score}</h1>
    </div>
  );
};

export default Header;

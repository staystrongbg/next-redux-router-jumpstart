const Paragraph = ({ children, style }) => {
  const P_STYLE = {
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: '10px 20px',
  };
  return <p style={{ ...P_STYLE, ...style }}>{children}</p>;
};

const Navigation = ({ children, s }) => {
  const STYLES_NAV = { width: '100%', padding: '10px 20px' };

  return <nav style={{ ...STYLES_NAV, ...s }}>{children}</nav>;
};
export { Paragraph, Navigation };

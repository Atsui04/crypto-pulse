const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <p className="copyright">&copy; {year} by Markiian Bushko</p>
    </footer>
  );
};

export default Footer;

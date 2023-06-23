function Footer() {
  return (
    <footer className="deep-purple lighten-4" style={{padding: "20px"}}>
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            // href="https://shumnairyna.github.io/react_shop/"
            href="#"
            target="_blank"
            rel="noreferrer">
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };

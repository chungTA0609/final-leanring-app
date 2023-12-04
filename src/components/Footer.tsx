const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              {new Date().getFullYear()} &copy; Minton theme by{" "}
              <a href="">ChungLNT</a>
            </div>
            <div className="col-md-6">
              <div className="text-md-right footer-links d-none d-sm-block">
                <a>About Us</a>
                <a>Help</a>
                <a>Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;

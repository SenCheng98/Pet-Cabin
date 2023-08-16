import Nav1 from "../Nav1/index";
import Footer from "../Footer/index";
import Content from "../Content";

function Template(props) {
  return (
    <>
      <Nav1/>
      <Content>{props.children}</Content>
      <Footer />
    </>
  );
}

export default Template;
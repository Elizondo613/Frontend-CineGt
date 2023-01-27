import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://eloutput.com/wp-content/uploads/2021/12/avatar-2-cartel.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Avatar the way of water</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://as01.epimg.net/meristation/imagenes/2021/11/04/noticias/1636018839_216163_1636018950_portada_normal.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Eternals</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.madridterror.com/wp-content/uploads/2019/12/ATRBQGCVTRHQJAYCHJASMKTZK4.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>El conjuro 3</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;

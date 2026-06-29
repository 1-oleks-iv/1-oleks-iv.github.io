import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function App() {
  return (
      <div className="bg-dark text-light min-vh-100 py-5" style={{ fontFamily: 'sans-serif' }}>
        <Container>
          <div className="text-center mb-5">
            <h1 className="fw-bold display-4 text-white">Oleksandr Ivanenko</h1>
            <p className="text-secondary fs-4">Frontend Developer | React, TypeScript, Vite</p>
          </div>

          <h2 className="mb-4 text-white border-bottom border-secondary pb-2">My Projects</h2>
          <Row className="g-4">

            <Col md={6}>
              <Card className="bg-black text-light border-secondary h-100 shadow-lg">
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold fs-3 text-uppercase text-warning">Brutal ToDo</Card.Title>
                  <Card.Text className="text-secondary mt-2 mb-4">
                    Жесткий и бескомпромиссный таск-трекер. Написан на React. Использует Firebase для авторизации и облачного хранения (Cloud Firestore).
                  </Card.Text>
                  <div className="mt-auto">
                    <Button
                        variant="warning"
                        href="https://1-oleks-iv.github.io/BRUTAL-TODO/"
                        target="_blank"
                        className="fw-bold text-dark w-100"
                    >
                      🚀 Запустить
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="bg-black text-light border-secondary h-100 shadow-lg">
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fw-bold fs-3 text-info">Buds Store</Card.Title>
                  <Card.Text className="text-secondary mt-2 mb-4">
                    Современный интернет-магазин техники. Разработан на React + TypeScript. Продвинутая работа с Контекстом для управления корзиной покупок.
                  </Card.Text>
                  <div className="mt-auto">
                    <Button
                        variant="info"
                        href="https://1-oleks-iv.github.io/budsStore/"
                        target="_blank"
                        className="fw-bold text-dark w-100"
                    >
                      🎧 Смотреть магазин
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>
      </div>
  )
}

export default App
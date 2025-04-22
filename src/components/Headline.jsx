import { useState, useEffect } from "react";
import { GetHeadlines } from "../Service/NewsService.jsx";
import { Container, Row, Col, Alert, Card, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Headline.css";

export default function Headline() {
  const [articles, setArticles] = useState([]);
  const [topic, setTopic] = useState("sports");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 21;

  async function fetchHeadline() {
    const response = await GetHeadlines(topic);
    setArticles(response.data.articles);
  }

  useEffect(() => {
    fetchHeadline();
  }, []);

  const HandleChange = (event) => {
    setTopic(event.target.value);
  };

  const HandleForm = async (event) => {
    event.preventDefault();
    const response = await GetHeadlines(topic);
    setArticles(response.data.articles);
    setCurrentPage(1); 
  };


  const indexOfLast = currentPage * articlesPerPage;
  const indexOfFirst = indexOfLast - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const paginate = (pageNum) => setCurrentPage(pageNum);

  return (
    <>
      <Container>
        <Alert variant={"success"} className={"mt-4 text-center"}>
          <h4>Top Headlines</h4>
        </Alert>
        <form onSubmit={HandleForm}>
          <input
            type="text"
            className="search-input"
            placeholder="Search News"
            onChange={HandleChange}
          />
          <input
            type="submit"
            className="search-btn"
            value="Search"
            style={{
              backgroundColor: "blue",
              color: "white",
              borderColor: "blue",
            }}
          />
        </form>
      </Container>

      <Container className="mt-4">
        <Row className="row-gap">
          {currentArticles.map((article, key) => (
            <Col className="col-gap" key={key} lg={4}>
              <Link
                to={article.url}
                style={{ textDecorationLine: "none", color: "black" }}
              >
                <Card className="card-size">
                  <Card.Img src={article.urlToImage} />
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.description}</Card.Text>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>

        {/* Pagination Component */}
        {totalPages > 1 && (
          <Pagination className="justify-content-center mt-4">
            {[...Array(totalPages)].map((_, index) => (
              <Pagination.Item
                key={index + 1}
                active={index + 1 === currentPage}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        )}
      </Container>
    </>
  );
}


import React from "react";
import { GetAllNews } from "../Service/NewsService";
import { Container, Row, Col, Alert, Card, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AllNews.css";

export default function AllNews() {
  const [articles, setArticles] = React.useState([]);
  const [topic, setTopic] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  const articlesPerPage = 21;

  async function FetchNews() {
    const response = await GetAllNews("technology");
    setArticles(response.data.articles);
    console.log((response.data.articles);
  }

  React.useEffect(() => {
    FetchNews();
  }, []);

  const HandleChange = (event) => {
    setTopic(event.target.value);
  };

  const HandleForm = async (event) => {
    event.preventDefault();
    const response = await GetAllNews(topic);
    setArticles(response.data.articles);
    setCurrentPage(1); // Reset to first page when searching
  };

  // Pagination logic
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Container>
        <Alert variant={"success"} className={"mt-4 text-center"}>
          <h4>All News</h4>
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
              borderColor: "hidden",
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

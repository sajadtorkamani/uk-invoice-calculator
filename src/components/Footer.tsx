import React from 'react'
import { APP_NAME, GITHUB_REPO_URL } from "../lib/constants";
import { Container } from 'react-bootstrap';

const Footer: React.FC = () => (
  <footer className="site-footer bg-light p-3 border-top text-muted">
    <Container className="d-flex justify-content-between gap-3">
      <div>
        {APP_NAME} &copy; {new Date().getFullYear()}
      </div>

      <a href={GITHUB_REPO_URL} target="_blank" className="text-inherit">View on
        GitHub</a>
    </Container>
  </footer>
)

export default Footer
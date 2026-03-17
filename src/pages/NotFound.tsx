import MetaTags from "../components/MetaTags";

export default function NotFound() {
  return (
    <>
      <MetaTags 
        title="404 - Page Not Found | Blockwise"
        description="The page you're looking for doesn't exist."
      />
      <div className="section-wrapper">
        <div className="container">
          <h1>404 - Page Not Found</h1>
          <p>The page you're looking for doesn't exist.</p>
        </div>
      </div>
    </>
  );
}

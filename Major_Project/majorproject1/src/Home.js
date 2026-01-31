import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate()

  return (
    <div className="home-bg">
      <div className="hero">
        Republic Day Mega Deals 🇮🇳

      </div>

      <div className="category-section">
        <h2>Shop by Category</h2>

        <div className="category-list">
          <div
            className="category-card"
            onClick={() => navigate("/category/electronics")}
          >
            Electronics
          </div>

          <div
            className="category-card"
            onClick={() => navigate("/category/clothing")}
          >
            Clothing
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

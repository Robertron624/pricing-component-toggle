/* eslint-disable react/prop-types */
import { useState } from 'react'
import './App.scss'

const cards = [
  {
    title: "Basic",
    price: {
      monthly: "$19.99",
      annually: "$199.99"
    },
    features: [
      "500 GB Storage",
      "2 Users Allowed",
      "Send up to 3 GB"
    ]
  },
  {
    title: "Professional",
    price: {
      monthly: "$24.99",
      annually: "$249.99"
    },
    features: [
      "1 TB Storage",
      "5 Users Allowed",
      "Send up to 10 GB"
    ]
  },
  {
    title: "Master",
    price: {
      monthly: "$39.99",
      annually: "$399.99"
    },
    features: [
      "2 TB Storage",
      "10 Users Allowed",
      "Send up to 20 GB"
    ]
  }
]

function Card({ title, price, features }) {
  return (
    <div className={`card ${title}`}>
      <h2>{title}</h2>
      <h3>{price}</h3>
      <ul className='features'>
        {features.map((feature, index) => (
          <li className='feature' key={index}>{feature}</li>
        ))}
      </ul>
      <button>Learn More</button>
    </div>
  )
}

function App() {
  const [timePeriod, setTimePeriod] = useState("annually")


  function handleToggle() {
    setTimePeriod(timePeriod === "annually" ? "monthly" : "annually")
  }

  return (
    <div className='app'>
      <h1>Our Pricing</h1>
      <div className="switcher-container">
        <span>Annually</span>
        <div onClick={handleToggle} className={`switcher-outer`}>
          <div className={`switcher-inner  ${timePeriod}`}></div>         
        </div>
        <span>Monthly</span>
      </div>
      <div className="cards">
        {cards.map((card, index) => {
          const { title, price, features } = card
          return (
            <Card
              key={index}
              title={title}
              price={price[timePeriod]}
              features={features}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('')  // To store generate colors
  const [answers, setAnswers] = useState<string[]>([])  // To store diff HEX value
  const [result, setResult] = useState<boolean | undefined>(undefined)  // To compare the results

  // Function to generate HexaDecimal value
  const generateColor = () => {
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

    const color = new Array(6)
      .fill('')
      .map(() => digits[Math.floor(Math.random() * digits.length)])
      .join('')
    console.log(color)
    return `#${color}`
  }

  // Function to generate different button with options
  const pickColor = () => {
    const actualColor = generateColor()
    setColor(actualColor)
    setAnswers([actualColor, generateColor(), generateColor()].sort(
      () => 0.5 - Math.random()
    ))
  }
  
  useEffect(() => {
    pickColor() 
  }, [])

  const handleAnswerClicked = (answer: string) => {
    if (answer === color) {
      setResult(true) // Correct Answer
      pickColor() // If correct this re-renders the color
    } else {
      setResult(false)  // Wrong Answer
    }
  }

  return (
    <section className='game'>
      <div className="col">
        <div className='guess-me' style={{ backgroundColor: color }}></div>
        <div className="btn-group">
          {
            answers.map((answer) => (
              <button onClick={() => handleAnswerClicked(answer)} key={answer}>{answer}</button>
            ))
          }
        </div>
        { result === false && <div className='result wrong'>Wrong</div> }
        { result === true && <div className='result correct'>Correct</div> }
      </div>
    </section>
  )
}

export default App

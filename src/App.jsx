import { AsteriskIcon, MinusIcon, PlusIcon, SlashIcon } from 'lucide-react'
import { useState } from 'react'
function App() {
	const [nums, setNums] = useState({
		num1: '',
		num2: '',
	})
	const [success, setSuccess] = useState(null)
	const [error, setError] = useState(null)

	const { num1, num2 } = nums

	const validateNums = () => {
		if (!num1.trim()) {
			setSuccess(null)
			setError('Num1 Cannot Be Empty')
			return false
		}

		if (!num2.trim()) {
			setSuccess(null)
			setError('Num2 Cannot Be Empty')
			return false
		}

		if (!Number(num1)) {
			setSuccess(null)
			setError('Num1 Must Be A Number')
			return false
		}

		if (!Number(num2)) {
			setSuccess(null)
			setError('Num2 Must Be A Number')
			return false
		}

		setError(null)
		return true
	}

	const handleArithmeticOperationClick = (operationType) => {
		if (!validateNums()) return

		switch (operationType) {
			case '+':
			setSuccess(Number(num1) + Number(num2))
				break
			case '-':
			setSuccess(Number(num1) - Number(num2))
				break
			case '*':
			setSuccess(Number(num1) * Number(num2))
				break
			case '/':
				setSuccess((Number(num1) / Number(num2)).toFixed(2))
				break
			default:
				break
		}
	}

	const handleInputChange = (e) => {
		const { name, value } = e.target
		setNums({ ...nums, [name]: value })
	}

	return (
		<div className='app'>
			<div className='calculator'>
				<h1>React Calculator</h1>
				<input
					onChange={handleInputChange}
					name='num1'
					value={num1}
					type='text'
					placeholder='Num 1'
				/>
				<input
					onChange={handleInputChange}
					name='num2'
					value={num2}
					type='text'
					placeholder='Num 2'
				/>
				<div className='buttons'>
					<button onClick={() => handleArithmeticOperationClick('+')}>
						<PlusIcon />
					</button>
					<button onClick={() => handleArithmeticOperationClick('-')}>
						<MinusIcon />
					</button>
					<button onClick={() => handleArithmeticOperationClick('*')}>
						<AsteriskIcon />
					</button>
					<button onClick={() => handleArithmeticOperationClick('/')}>
						<SlashIcon />
					</button>
				</div>
				{success && (
					<>
						<h4 className='success'>Success!</h4>
						<h4>Result - {success}</h4>
					</>
        )}
        
        {error && (
          <>
            <h4 className='error'>Error!</h4>
            <h4>{error}</h4>
          </>
        )}
			</div>
		</div>
	)
}

export default App

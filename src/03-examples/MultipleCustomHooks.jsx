import { useCounter, useFetch } from '../hooks';
import LoadingQuote from './LoadingQuote';
import Quote from './Quote';

const MultipleCustomHooks = () => {
	const { counter, increment } = useCounter(1);
	const { data, isLoading } = useFetch(
		`https://www.breakingbadapi.com/api/quotes/${counter}`
	);
	const { quote, author } = !!data && data[0];

	return (
		<>
			<h1>The Breaking Bad API</h1>
			<hr />
			{isLoading ? <LoadingQuote /> : <Quote quote={quote} author={author} />}
			<button
				disabled={isLoading}
				className='btn btn-info'
				onClick={() => increment()}
			>
				Next quote
			</button>
		</>
	);
};

export default MultipleCustomHooks;

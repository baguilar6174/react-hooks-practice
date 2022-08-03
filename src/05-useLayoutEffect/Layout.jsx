import { useCounter, useFetch } from "../hooks";
import LoadingQuote from "../03-examples/LoadingQuote";
import Quote from "../03-examples/Quote";

const Layout = () => {

  const { counter, increment } = useCounter(1);
  const { data, isLoading, error } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { quote, author } = !!data && data[0];

  return (
    <>
      <h1>The Breaking Bad API</h1>
      <hr />
      { isLoading ? <LoadingQuote/> : <Quote quote={quote} author={author} /> }
      <button disabled={isLoading} className="btn btn-info" onClick={() => increment()}>Next quote</button>
    </>
  )
}

export default Layout;
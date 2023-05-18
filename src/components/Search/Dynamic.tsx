import dynamic from "next/dynamic"

const Component = dynamic(() => import('./Search'), {
  loading: () => <p>Search ...</p>
})

export default Component
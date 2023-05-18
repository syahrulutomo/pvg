import dynamic from "next/dynamic"

const Component = dynamic(() => import('./DefaultLayout'), {
  loading: () => <p>DefaultLayout ...</p>
})

export default Component
import dynamic from "next/dynamic"

const Component = dynamic(() => import('./TopNavigation'), {
  loading: () => <p>TopNavigation ...</p>
})

export default Component
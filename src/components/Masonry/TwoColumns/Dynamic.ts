import dynamic from "next/dynamic"

const Component = dynamic(() => import(/* webpackChunkName: "masonry-two-columns" */ './TwoColumns'))

export default Component
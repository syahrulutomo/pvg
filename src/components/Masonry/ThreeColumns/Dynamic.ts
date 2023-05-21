import dynamic from "next/dynamic"

const Component = dynamic(() => import(/* webpackChunkName: "masonry-three-columns" */ './ThreeColumns'))

export default Component
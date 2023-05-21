import dynamic from "next/dynamic"

const Component = dynamic(() => import(/* webpackChunkName: "default-layout" */ './DefaultLayout'))

export default Component
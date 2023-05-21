import dynamic from "next/dynamic"

const Component = dynamic(() => import(/* webpackChunkName: "social-share" */ './SocialShare'))

export default Component
import React from 'react'

import Card from '@/components/Card'
import { containerCx, sectionCx } from '../style'


const TwoColumns = () => {
  return (
    <div className={containerCx(2)}>
      <div className={sectionCx}>
        <Card title="Title" subtitle="Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ' Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their" />
        <Card title="Title" subtitle="Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ' Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their" />
        <Card title="Title" subtitle="Subtitle" />
        <Card title="Title" subtitle="Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ' Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their" />
      </div>
      <div className={sectionCx}>
        <Card title="Title" subtitle="Subtitle" />
        <Card title="Title" subtitle="Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ' Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their" />
        <Card title="Title" subtitle="Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ' Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their" />
        <Card title="Title" subtitle="Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ' Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their" />
      </div>
    </div>
  )
}

export default TwoColumns
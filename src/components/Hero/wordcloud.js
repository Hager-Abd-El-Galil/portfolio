import React, { useEffect, useState } from 'react'
import TagCloud from 'TagCloud'

const WordCloud = () => {
  const [isLoading, setLoad] = useState(true)

  const container = '.content'
  const texts = [
    'Java',
    'React',
    'mongo DB',
    'Express',
    'Node JS',
    'Redux',
    'HTML5',
    'CSS3',
    'JS',
    'Bootstrap',
    'SASS',
    'Angular',
    'Vue JS',
    'Ruby',
    'MYSQL',
    'C++',
    'C',
    'Python',
    'Django',
    'Git',
    'Linux',
  ]
  const options = {
    radius: 220,
    maxSpeed: 'fast',
    initSpeed: 'fast',
    direction: 135,
    keep: true,
  }
  //   to render wordcloud each time the page is reloaded
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (isLoading) {
      TagCloud(container, texts, options)
      console.log('i fire once')
      setLoad(false)
    }
  })

  return (
    <div className="main">
      <span className="content"></span>
    </div>
  )
}

export default WordCloud

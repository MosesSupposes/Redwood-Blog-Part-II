// Pass props to your component by passing an `args` object to your story
//
// ```jsx
// export const Primary = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Comment from './Comment'

export const generated = ({ comment }) => {
  return (
    <Comment
      comment={{
        name: 'Mosha',
        body: 'Mimi Nakupenda Miti!',
        createdAt: "2023-09-29T21:14:27.280Z"
      }}
    />
  )
}


export default {
  title: 'Components/Comment',
  component: Comment
}


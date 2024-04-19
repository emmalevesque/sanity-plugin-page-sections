import {ArrayOfPrimitivesInputProps} from 'sanity'

import {Card} from '@sanity/ui'

export default function ListComponent(props: ArrayOfPrimitivesInputProps) {
  return (
    <Card padding={4} radius={2} shadow={1}>
      {props.renderDefault(props)}
    </Card>
  )
}

import {ArrayOfPrimitivesInputProps, useClient, useFormValue} from 'sanity'

import {Card, Button, Flex, Stack} from '@sanity/ui'

export default function ListComponent(props: ArrayOfPrimitivesInputProps) {
 

  const block = useFormValue(props.path.slice(0, 2))

  const { schemaType, onChange } = props

  return (
    <Card padding={4} radius={2} shadow={1}>
      <Stack space={2}>
      {props.renderDefault(props)}
      </Stack>
    </Card>
  )
}

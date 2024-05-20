import { PortableTextBlock, PortableTextComponent, PortableTextComponentProps } from 'next-sanity'

export const DisplayComponent= (props: PortableTextComponentProps<any>) => {
  return <span>{props.children}</span>
}
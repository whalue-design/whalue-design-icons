// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ContainerOutlinedSvg from '@whalue-design/icons-svg/lib/asn/ContainerOutlined';

export default {
  name: 'IconContainerOutlined',
  displayName: 'ContainerOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ContainerOutlinedSvg } },
      children,
    ),
};
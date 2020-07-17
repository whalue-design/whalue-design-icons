// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ContainerTwoToneSvg from '@whalue-design/icons-svg/lib/asn/ContainerTwoTone';

export default {
  name: 'IconContainerTwoTone',
  displayName: 'ContainerTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ContainerTwoToneSvg } },
      children,
    ),
};
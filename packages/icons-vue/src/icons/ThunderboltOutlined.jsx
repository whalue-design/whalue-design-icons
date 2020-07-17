// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ThunderboltOutlinedSvg from '@whalue-design/icons-svg/lib/asn/ThunderboltOutlined';

export default {
  name: 'IconThunderboltOutlined',
  displayName: 'ThunderboltOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ThunderboltOutlinedSvg } },
      children,
    ),
};
// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ForkOutlinedSvg from '@whalue-design/icons-svg/lib/asn/ForkOutlined';

export default {
  name: 'IconForkOutlined',
  displayName: 'ForkOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ForkOutlinedSvg } },
      children,
    ),
};
// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FastForwardOutlinedSvg from '@whalue-design/icons-svg/lib/asn/FastForwardOutlined';

export default {
  name: 'IconFastForwardOutlined',
  displayName: 'FastForwardOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FastForwardOutlinedSvg } },
      children,
    ),
};
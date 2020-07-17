// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FastBackwardOutlinedSvg from '@whalue-design/icons-svg/lib/asn/FastBackwardOutlined';

export default {
  name: 'IconFastBackwardOutlined',
  displayName: 'FastBackwardOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FastBackwardOutlinedSvg } },
      children,
    ),
};
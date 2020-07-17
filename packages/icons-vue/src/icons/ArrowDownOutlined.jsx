// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ArrowDownOutlinedSvg from '@whalue-design/icons-svg/lib/asn/ArrowDownOutlined';

export default {
  name: 'IconArrowDownOutlined',
  displayName: 'ArrowDownOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ArrowDownOutlinedSvg } },
      children,
    ),
};
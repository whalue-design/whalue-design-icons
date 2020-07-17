// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import StrikethroughOutlinedSvg from '@whalue-design/icons-svg/lib/asn/StrikethroughOutlined';

export default {
  name: 'IconStrikethroughOutlined',
  displayName: 'StrikethroughOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: StrikethroughOutlinedSvg } },
      children,
    ),
};
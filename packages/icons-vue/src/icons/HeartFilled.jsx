// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import HeartFilledSvg from '@whalue-design/icons-svg/lib/asn/HeartFilled';

export default {
  name: 'IconHeartFilled',
  displayName: 'HeartFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: HeartFilledSvg } },
      children,
    ),
};
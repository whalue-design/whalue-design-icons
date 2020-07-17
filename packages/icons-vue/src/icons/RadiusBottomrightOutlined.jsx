// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import RadiusBottomrightOutlinedSvg from '@whalue-design/icons-svg/lib/asn/RadiusBottomrightOutlined';

export default {
  name: 'IconRadiusBottomrightOutlined',
  displayName: 'RadiusBottomrightOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RadiusBottomrightOutlinedSvg } },
      children,
    ),
};
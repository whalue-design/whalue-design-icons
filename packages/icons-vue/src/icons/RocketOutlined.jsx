// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import RocketOutlinedSvg from '@whalue-design/icons-svg/lib/asn/RocketOutlined';

export default {
  name: 'IconRocketOutlined',
  displayName: 'RocketOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RocketOutlinedSvg } },
      children,
    ),
};
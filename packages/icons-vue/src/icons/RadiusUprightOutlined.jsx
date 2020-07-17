// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import RadiusUprightOutlinedSvg from '@whalue-design/icons-svg/lib/asn/RadiusUprightOutlined';

export default {
  name: 'IconRadiusUprightOutlined',
  displayName: 'RadiusUprightOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RadiusUprightOutlinedSvg } },
      children,
    ),
};
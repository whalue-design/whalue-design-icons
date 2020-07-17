// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import LinkedinOutlinedSvg from '@whalue-design/icons-svg/lib/asn/LinkedinOutlined';

export default {
  name: 'IconLinkedinOutlined',
  displayName: 'LinkedinOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: LinkedinOutlinedSvg } },
      children,
    ),
};
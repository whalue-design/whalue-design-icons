// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import VerifiedOutlinedSvg from '@whalue-design/icons-svg/lib/asn/VerifiedOutlined';

export default {
  name: 'IconVerifiedOutlined',
  displayName: 'VerifiedOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: VerifiedOutlinedSvg } },
      children,
    ),
};
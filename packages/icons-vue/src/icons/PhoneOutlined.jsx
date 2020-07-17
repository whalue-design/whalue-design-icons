// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import PhoneOutlinedSvg from '@whalue-design/icons-svg/lib/asn/PhoneOutlined';

export default {
  name: 'IconPhoneOutlined',
  displayName: 'PhoneOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PhoneOutlinedSvg } },
      children,
    ),
};
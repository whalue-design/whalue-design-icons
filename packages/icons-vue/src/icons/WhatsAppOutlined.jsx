// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import WhatsAppOutlinedSvg from '@whalue-design/icons-svg/lib/asn/WhatsAppOutlined';

export default {
  name: 'IconWhatsAppOutlined',
  displayName: 'WhatsAppOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: WhatsAppOutlinedSvg } },
      children,
    ),
};
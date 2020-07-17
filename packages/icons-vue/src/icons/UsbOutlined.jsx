// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import UsbOutlinedSvg from '@whalue-design/icons-svg/lib/asn/UsbOutlined';

export default {
  name: 'IconUsbOutlined',
  displayName: 'UsbOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: UsbOutlinedSvg } },
      children,
    ),
};
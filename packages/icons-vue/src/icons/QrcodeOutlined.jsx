// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import QrcodeOutlinedSvg from '@whalue-design/icons-svg/lib/asn/QrcodeOutlined';

export default {
  name: 'IconQrcodeOutlined',
  displayName: 'QrcodeOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: QrcodeOutlinedSvg } },
      children,
    ),
};
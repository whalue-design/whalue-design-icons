// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import PrinterOutlinedSvg from '@whalue-design/icons-svg/lib/asn/PrinterOutlined';

export default {
  name: 'IconPrinterOutlined',
  displayName: 'PrinterOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PrinterOutlinedSvg } },
      children,
    ),
};
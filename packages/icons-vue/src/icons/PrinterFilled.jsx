// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import PrinterFilledSvg from '@whalue-design/icons-svg/lib/asn/PrinterFilled';

export default {
  name: 'IconPrinterFilled',
  displayName: 'PrinterFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PrinterFilledSvg } },
      children,
    ),
};
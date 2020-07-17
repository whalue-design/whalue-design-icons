// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import PrinterTwoToneSvg from '@whalue-design/icons-svg/lib/asn/PrinterTwoTone';

export default {
  name: 'IconPrinterTwoTone',
  displayName: 'PrinterTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PrinterTwoToneSvg } },
      children,
    ),
};
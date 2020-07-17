// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FilePptFilledSvg from '@whalue-design/icons-svg/lib/asn/FilePptFilled';

export default {
  name: 'IconFilePptFilled',
  displayName: 'FilePptFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FilePptFilledSvg } },
      children,
    ),
};
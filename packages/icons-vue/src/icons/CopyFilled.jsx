// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CopyFilledSvg from '@whalue-design/icons-svg/lib/asn/CopyFilled';

export default {
  name: 'IconCopyFilled',
  displayName: 'CopyFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CopyFilledSvg } },
      children,
    ),
};
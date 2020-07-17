// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import UnderlineOutlinedSvg from '@whalue-design/icons-svg/lib/asn/UnderlineOutlined';

export default {
  name: 'IconUnderlineOutlined',
  displayName: 'UnderlineOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: UnderlineOutlinedSvg } },
      children,
    ),
};
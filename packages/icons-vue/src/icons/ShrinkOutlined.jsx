// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import ShrinkOutlinedSvg from '@whalue-design/icons-svg/lib/asn/ShrinkOutlined';

export default {
  name: 'IconShrinkOutlined',
  displayName: 'ShrinkOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: ShrinkOutlinedSvg } },
      children,
    ),
};